class ListPageObject {
  constructor() {
    this._addBeansBtn = element(by.id('add-button'));
  }

  openRootView() {
    return browser.get('http://localhost:9000');
  }

  openRegisteringBeansView() {
    this.openRootView();
    browser.wait(()=> { return this._addBeansBtn.isPresent(); });
    return this._addBeansBtn.click();
  }
}

module.exports = new ListPageObject();
