import IframePage from "../page/iframePage";

const iframePage = new IframePage();

describe("iFrames Validation", () => {
  beforeEach(() => {
    iframePage.visit();
  });

  it("Validate iframe main title", () => {
    iframePage.getFrameTitle();
  });

  it("Validate iframe css main title", () => {
    iframePage.goToCssPageInFrame();
  });


});