class PageObjectAdd {
  constructor() {
    this.submitBtn = element(by.id('submit'));
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
