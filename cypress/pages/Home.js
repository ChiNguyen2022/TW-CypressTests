class HomePage {
  visit() {
    cy.visit("/");
    return this;
  }
  getlblBookTicket(){
    return cy.get("h3");
  }
  getlogoMarsAir(){
    return cy.get("h1 > a");
  }
  getcmbDeparting() {
    return cy.get("#departing");
  }
  getcmbReturning() {
    return cy.get("#returning");
  }
  gettxtPromtionalCode() {
    return cy.get("#promotional_code");
  }
  getbtnSearch() {
    return cy.get(":nth-child(5) > dd > input");
  }

  /**
   * This for search flight without promotion Code
   * @param {*} departDate 
   * @param {*} returnDate 
   */

  searchFlightwithoutCode(departDate, returnDate) {
    this.getcmbDeparting().select(departDate);
    this.getcmbReturning().select(returnDate);
    this.getbtnSearch().click();
  }

  /**
   * This for search flight with promotion Code
   * @param {*} departDate 
   * @param {*} returnDate 
   * @param {*} promotionCode 
   */

  searchFlightwithCode(departDate, returnDate, promotionCode) {
    this.getcmbDeparting().select(departDate);
    this.getcmbReturning().select(returnDate);
    this.gettxtPromtionalCode().type(promotionCode);
    this.getbtnSearch().click();
  }
}

export const homePage = new HomePage();
