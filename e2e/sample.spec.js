describe('リスト画面',()=> {
  var pageList = require('./components/list.po.js');
  var pageAdd = require('./components/add.po.js');

  it('豆追加ボタンが表示されている', ()=> {
    pageList.openThisPage();

    browser.wait(()=> { return pageList.addBeansBtn.isPresent(); });
    expect(pageList.addBeansBtn.isPresent()).toBe(true);
  });
});
