class PageObjectAdd {
  constructor() {
    this.submitBtn = element(by.id('submit'));
    this.brandInput = element(by.id('brand'));
    this.regionInput = element(by.id('region'));
    this.amountInput = element(by.id('amount'));
    this.importDateInput = element(by.id('import-date'));
  }

  openThisPage() {
    //TODO: URL ハードコードを設定ファイルにまとめる
    // ここで /add の表示条件を整える
    return browser.get('http://localhost:9000/add');
  }

  openListPage() {
    this.openThisPage();
    browser.wait(()=> { return this.submitBtn.isPresent(); });
    return this.submitBtn.click();
  }
}

module.exports = new PageObjectAdd();
