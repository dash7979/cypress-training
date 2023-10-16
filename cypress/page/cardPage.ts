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
        cy.xpath(cartPage.listItem).should((elementos) => {
          contadorElemento = elementos.length;
        }).then(()=>{
          for(let i = 1; i <= contadorElemento; i++){
            cy.xpath(`//*[@id="tbodyid"]/tr[${i}]/td[3]`).then((fila)=>{
              const value = parseInt(fila.text())            
              suma+= value;              
            })
          }
        }).then(()=>{
          let sumaString = suma.toString();
          cy.get(cartPage.totalPrice).invoke("text").should("eq", sumaString)
        }); 
    }

    createPurchaseOrder(){
        cy.get(cartPage.btnCart).click(); 
        cy.xpath(cartPage.placeOrder).click();
        cy.get(fillPage.name).type("Dimaria", {force: true});
        cy.get(fillPage.country).type("Colombia", {force: true});
        cy.get(fillPage.city).type("La Dorada", {force: true});
        cy.get(fillPage.creditCard).type("392885547756", {force: true});
        cy.get(fillPage.month).type("Octubre", {force: true});
        cy.get(fillPage.year).type("2023", {force: true});
        cy.xpath(fillPage.purchase).contains("Purchase").click().then(()=>{
            cy.get(fillPage.alertFill).should("be.visible")
        })        
        
    }

}