describe('/',()=> {
  var listView = require('./components/list.po.js');

  it('新規登録ボタンが表示されている', ()=> {
    var addBeansBtn = element(by.id('add-button'));

    listView.openRootView();

    browser.wait(()=> { return addBeansBtn.isPresent(); });
    expect(addBeansBtn.isPresent()).toBe(true);
  });

  it('リスト画面から新規登録画面に遷移できること', ()=> {
    var submit = element(by.id('submit'));

    listView.openRegisteringBeansView();

    browser.wait(()=> { return submit.isPresent(); });
    expect(submit.isPresent()).toBe(true);
  });
});
