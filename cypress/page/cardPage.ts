import { cartPage,fillPage } from "../support/locators";

export class CartPage {
    constructor(){
    
    }

    verifyCartPage(){
      cy.get(cartPage.btnCart).click();   
      cy.get(cartPage.totalPrice).should("be.visible")         
    }

    verifySumProducts(){
        let contadorElemento = 0; 
        let suma = 0;
        cy.get("#totalp").should("have.text" , 1420);
        
    }
    createPurchaseOrder(){
        cy.get(cartPage.btnCart).click(); 
        cy.get("#page-wrapper button").contains("Place Order").click();
        cy.get(fillPage.name).type("Dimaria", {force: true});
        cy.get(fillPage.country).type("Colombia", {force: true});
        cy.get(fillPage.city).type("La Dorada", {force: true});
        cy.get(fillPage.creditCard).type("392885547756", {force: true});
        cy.get(fillPage.month).type("Octubre", {force: true});
        cy.get(fillPage.year).type("2023", {force: true});
        cy.contains("button.btn-primary" , "Purchase").click();
               
        
    }

};