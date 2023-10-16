import { LoginPage,ProductPage,CartPage,MessagePage } from "../pages";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const shoppingCartPage = new CartPage();


describe("Demoblaze Tests", () => {

    beforeEach(() => {
      loginPage.toLogIn()
    });
  
    it("Validate a successful login and username", () => {
      loginPage.verifyLogin()
    });
    
    it("Add product to the cart and validate that the name corresponds to the selected product",() =>{
        productPage.addProduct("Phones","Sony xperia z5");
        productPage.addProduct("Laptops","Dell i7 8gb");
        productPage.addProduct("Monitors","Apple monitor 24");       
    })

    it("Validate the total sum of the selected products' prices", ()=>{      
      shoppingCartPage.verifyCartPage();
      shoppingCartPage.verifySumProducts();     
    });  

    it("Validate that the purchase is successful", () => {
      shoppingCartPage.createPurchaseOrder();
    })

});