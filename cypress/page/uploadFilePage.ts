import { fileLocators } from "../support/fileLocators";

class UploadFilePage{
    constructor() {
    }

    validateFileIsUploadedSuccesfully(){        
        cy.get(fileLocators.chooseFileButton).attachFile("dataContact.json");
        cy.get(fileLocators.uploadButton).click()
        cy.get(fileLocators.uploadedFileContainer).invoke('text').then((text) => {
            cy.log(text)
        })
    }
}

export default UploadFilePage;