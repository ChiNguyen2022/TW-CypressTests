import { homePage } from "../pages/Home";
import { resultPage } from "../pages/Result";
const flightData = require("../fixtures/flight.json");

describe("Home page", () => {
  beforeEach(() => {
    // homePage.visit();
    cy.visit("https://marsair.recruiting.thoughtworks.net/ChiNguyen");
  });

  it(` S01-Verify that a user can search for flight without promotion code`, () => {
    cy.wrap(flightData).each((data) => {
      //1. Search for flight
      homePage.searchFlightwithoutCode(data.departDate, data.returnDate);

      //2. Checking if the searching is successfully

      //VP: Verify "Search Result" label is visible
      resultPage.getlblSearchResults().should("be.visible");
      //VP: Verify that link to Home page is visible
      resultPage.getlnkBack().should("be.visible");

      //3. Back to Home page
      resultPage.getlnkBack().click();
      //4. Checking if user backs to Home page or not

      //VP: Verify "Book a ticket to the red planet now!" label is visible
      homePage.getlblBookTicket().should("be.visible");
      //VP: Verify that MarsAir logo on the top left should also take the user to the home page.
      homePage
        .getlogoMarsAir()
        .should("be.visible")
        .should("have.attr", "href", "/ChiNguyen");
    });
  });

  it(` S02-Verify that a user can search for flight successfully with valid promotion code`, () => {
    let promotionCode = flightData[0].validCode;

    //1. Search for flight
    homePage.searchFlightwithCode(
      flightData[0].departDate,
      flightData[0].returnDate,
      promotionCode
    );

    //2. Checking if the searching is successfully with valid code
    //VP: Verify "Search Result" label is visible
    resultPage.getlblSearchResults().should("be.visible");

    //VP: Verify that "Seat Availlable" is visible
    resultPage.getlblSeatAvaillable().should("be.visible");

    //VP: Verify that "Promotional code JJ1-OPQ-326 used: 10% discount!" message displays
    resultPage.getmsgPromotionalCode().then(($promoCode) => {
      expect($promoCode.text()).to.equal(
        "Promotional code " +
          promotionCode +
          " used: " +
          parseInt(promotionCode[2]) +
          "0% discount!"
      );
    });

    //VP: Verify that "Call now on 0800 MARSAIR to book!" is visible
    resultPage.getlblPhoneNumber().should("be.visible");

    //VP: Verify that link to Home page is visible
    resultPage.getlnkBack().should("be.visible");
  });

  it(` S03-Verify that error message display in case of invalid promotion code`, () => {
    let promotionCode = flightData[1].invalidCode;

    //1. Search for flight
    homePage.searchFlightwithCode(
      flightData[0].departDate,
      flightData[0].returnDate,
      promotionCode
    );

    //2. Checking if the searching is successfully
    //VP:  Verify "Search Result" label is visible
    resultPage.getlblSearchResults().should("be.visible");

    //VP: Verify that "Seat Availlable" is visible
    resultPage.getlblSeatAvaillable().should("be.visible");

    //VP:  Verify that "Sorry, code JJ2-OPQ-326 is not valid" message displays
    resultPage.getmsgPromotionalCode().then(($promoCode) => {
      expect($promoCode.text()).to.equal(
        "Sorry, code " + promotionCode + " is not valid"
      );
    });

    //VP: Verify that "Call now on 0800 MARSAIR to book!" is visible
    resultPage.getlblPhoneNumber().should("be.visible");

    //VP:  Verify that link to Home page is visible
    resultPage.getlnkBack().should("be.visible");
  });

  it(`S04-Verify that there is no more seat availlable `, () => {
    let promotionCode = flightData[0].validCode;

    //1. Search for flight
    homePage.searchFlightwithCode(
      flightData[3].departDate,
      flightData[3].returnDate,
      promotionCode
    );

    //2. Checking if the searching is successfully
    //VP:  Verify "Search Result" label is visible
    resultPage.getlblSearchResults().should("be.visible");

    //VP: Verify that "Sorry, there are no more seats available." is visible
    resultPage.getmsgNoSeat().should("be.visible");

    //VP:  Verify that link to Home page is visible
    resultPage.getlnkBack().should("be.visible");
  });

  it(`S05-Verify that informed message displays in case of invalid returned date `, () => {
    let promotionCode = flightData[0].validCode;

    //1. Search for flight
    homePage.searchFlightwithCode(
      flightData[1].departDate,
      flightData[1].returnDate,
      promotionCode
    );

    //2. Checking if the searching is successfully
    //VP:  Verify "Search Result" label is visible
    resultPage.getlblSearchResults().should("be.visible");

    //VP: Verify that "Unfortunately, this schedule is not possible. Please try again." is visible
    resultPage.getmsgNotPossible().should("be.visible");

    //VP:  Verify that link to Home page is visible
    resultPage.getlnkBack().should("be.visible");
  });
});
