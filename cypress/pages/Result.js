class ResultPage {
  //Search Result
  getlblSearchResults() {
    return cy.get("h2");
  }
  // Link to Home page
  getlnkBack() {
    return cy
      .get("#content")
      .find('a[href="javascript:window.history.go(-1)"]');
  }
  //Seats available!
  getlblSeatAvaillable() {
    return cy.get("#content").find('p:contains("Seats available")');
  }

  //Call now on 0800 MARSAIR to book!
  getlblPhoneNumber() {
    return cy
      .get("#content")
      .find('p:contains("Call now on 0800 MARSAIR to book!")');
  }

  //Sorry, code JJ2-OPQ-326 is not valid
  getmsgNoSeat() {
    return cy
      .get("#content")
      .find('p:contains("Sorry, there are no more seats available.")');
  }

  //Unfortunately, this schedule is not possible. Please try again.
  getmsgNotPossible() {
    return cy
      .get("#content")
      .find('p:contains("Unfortunately, this schedule is not possible. Please try again.")');
  }

  //Promotional code
  getmsgPromotionalCode() {
    return cy.get(".promo_code");
  }
  getmsg1() {
    return cy.get("#content > :nth-child(2)");
  }

  /**
   * This for check valid promotion Code
   * @param {*} promotionCode
   */

  checkValidCode(promotionCode) {
    let sumOfDigits =
      parseInt(promotionCode[2]) +
      parseInt(promotionCode[8]) +
      parseInt(promotionCode[9]);

    // Check if the promotional code is in the correct format.
    expect(promotionCode).to.match(/^[A-Z]{2}[0-9]-[A-Z]{3}-[0-9]{3}$/);
    // Check if the final digit is equal to the sum of all other digits modulo 10
    expect(sumOfDigits % 10).to.equal(parseInt(promotionCode[10]));
  }
}

export const resultPage = new ResultPage();
