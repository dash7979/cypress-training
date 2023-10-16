import { FillFormPage } from "../page/fillDemoQA";

const fForm = new FillFormPage();

describe("DemoQATests", () => {
    beforeEach(() => {
        fForm.goToFillForm();
    });

    it("Validate student registration", () => {
        fForm.fillOutAForm();
        fForm.validateTitleAfterFillingForm();
    });
  


  });