describe('backoffice test', () => {
  it('Visits the BackOffice', () => {
    cy.visit('http://103.105.211.138:2020/backoffice/account/login')
    cy.wait(3000)
  cy.get("input[name=name]").type(0);
  cy.get("input[name=password]").type(31862018).type("{enter}");
  })
 /* it('Visits the Product module', () => {
    cy.visit('http://103.105.211.138:2020/backoffice/account/login')
    cy.wait(3000)
  cy.get("input[name=name]").type(0);
  cy.get("input[name=password]").type(31862018).type("{enter}");
 // cy.wait(30000)
  cy.get('#delivery-20-512').click()
 
  cy.wait(6000)
  cy.get('.button.addPro.button.tooltip_cvr.ng-star-inserted').click({ force: true})        
  cy.get("input[formcontrolname=productName]").type("testing");

  })*/
})

