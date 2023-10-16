describe("Logg in feature", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#login2").click();
        cy.get("#loginusername").type("Dimaria");
        cy.get("#loginpassword").type("dada");
        cy.get(".btn-primary").contains("Log in").click();
        cy.get("#nameofuser").should("contain.text" , "Dimaria");
        

        

        cy.get(".list-group-item").contains("Phones").click();
        cy.get(".hrefch").contains("Sony xperia z5").click();
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get(".name").should("contain.text" , "Sony xperia z5");
        


        cy.get(".nav-link").contains("Home").click();



        cy.get(".list-group-item").contains("Laptops").click();

        cy.get(".hrefch").contains("Dell i7 8gb").click();
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get(".name").should("contain.text" , "Dell i7 8gb");
        

        cy.get(".nav-link").contains("Home").click();



        cy.get(".list-group-item").contains("Monitors").click();


        cy.get(".hrefch").contains("Apple monitor 24").click();
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get(".name").should("contain.text" , "Apple monitor 24");

        cy.get("#cartur").contains("Cart").click();
        cy.get(".panel-heading").should("contain.text" , "1420");

        cy.get(".btn-success").contains("Place Order").click();
        cy.get("#name").type("Dimaria");
        cy.get("#country").type("Colombia");
        cy.get("#city").type("La Dorada");
        cy.get("#card").type("3925577852");
        cy.get("#month").type("octubre");
        cy.get("#year").type("2023");

        cy.get(".btn-primary").contains("Purchase").click();

        cy.get(".confirm").click();

        
    });
  
    it("Validating successful login", () => {
        
        
    });

    //it("validating item name", () =>{
        
    //{force:true}}); elflacogmail.com

});