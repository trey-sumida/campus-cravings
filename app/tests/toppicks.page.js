import { Selector } from 'testcafe';

class TopPicksPage {
  constructor() {
<<<<<<< Updated upstream
    this.pageId = '#top-picks-page';
=======
    this.pageId = '#toppicks-page';
>>>>>>> Stashed changes
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const topPicksPage = new TopPicksPage();
