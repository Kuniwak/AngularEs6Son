describe('豆追加画面',()=> {
  var pageAdd = require('./components/add.po.js');
  var pageList = require('./components/list.po.js');

  it('確定ボタンが表示されている', ()=> {
    pageAdd.openThisPage();

    browser.wait(()=> { return pageAdd.submitBtn.isPresent(); });
    expect(pageAdd.submitBtn.isPresent()).toBe(true);
  });

  it('リスト画面から新規登録画面に遷移できること', ()=> {
    pageList.openAddPage();

    browser.wait(()=> { return pageAdd.submitBtn.isPresent(); });
    expect(pageAdd.submitBtn.isPresent()).toBe(true);
  });
});
