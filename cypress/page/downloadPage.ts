import { downloaderLocators} from "../support/demoQALocators";

const fForm = Cypress.env("fillDemoQA");
const path = require("path");

class DownloadFilePage{
    constructor() {
    }

    verifyDowload(){
        cy.visit(fForm.demoUrl +"uploadDownload")
        cy.get(downloaderLocators.download).contains("Download").click();
    }
    
    validateDownloadedFileExistsOnFolder() {
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, "sampleFile.jpeg")).should("exist");
      }

}

export default DownloadFilePage;