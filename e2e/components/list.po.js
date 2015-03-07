class PageObjectList {
  constructor() {
    this.addBeansBtn = element(by.id('add-button'));
  }

  openThisPage() {
    //TODO: URL ハードコードを設定ファイルにまとめる
    // ここで /list の表示条件を整える
    return browser.get('http://localhost:9000');
  }

  openAddPage() {
    this.openThisPage();
    browser.wait(()=> { return this.addBeansBtn.isPresent(); });
    return this.addBeansBtn.click();
  }
}

module.exports = new PageObjectList();
