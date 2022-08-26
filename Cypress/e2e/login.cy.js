describe('backoffice testing', () => {
  it('login test case 1', () => {
    cy.visit('http://103.105.211.138:2020/backoffice/account/login')
    cy.wait(3000)
  cy.get("input[name=name]").type(0);
  cy.get("input[name=password]").type(31862018).type("{enter}");
  cy.wait(3000)
 // cy.screenshot()  
})
    it('login test case 2', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type(1121121);
    cy.get("input[name=password]").type(31862018).type("{enter}");
    cy.wait(3000)
   // cy.screenshot()  
  })
    it('login test case 3', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type(0);
    cy.get("input[name=password]").type(454454545).type("{enter}");
    cy.wait(3000)  
    //cy.screenshot()
  })
    it('login test case 4', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type("                ");
    cy.get("input[name=password]").type(31862018).type("{enter}");
    cy.wait(9000)  
    //cy.screenshot()
  })
    it('login test case 5', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type("aaa");
    cy.get("input[name=password]").type("aaa").type("{enter}");
    cy.wait(9000)
    })
    it('login test case 6', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
      cy.get('.signin_blk').click()
    cy.wait(3000)
    })
    it('login test case 7', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
      cy.get("input[name=name]").type(0);
      cy.get('.signin_blk').click()
    cy.wait(3000)
    })
    it('login test case 8', () => {
      cy.visit('http://103.105.211.138:2020/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type(44444);
    cy.get("input[name=password]").type(4547878).type("{enter}");
    cy.wait(3000)  
    
  })
  })
