describe("Logg in feature", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#login2").click();
        cy.get("#loginusername").type("Dimaria");
        cy.wait(5500)
        cy.get("#loginpassword").type("dada");
        cy.get(".btn-primary").contains("Log in").click();
  
        cy.get("#nameofuser").should("contain.text" , "Dimaria");
  
  
        //cy.wait(2000);
        // pasos para loguearme
    });
  
    it("Validating successful login", () => {
        //Pasos para test 1
    });
  });