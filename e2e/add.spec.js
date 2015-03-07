describe('豆追加画面', ()=> {
  var pageAdd = require('./components/add.po.js');
  var pageList = require('./components/list.po.js');

  describe('表示', ()=> {
    beforeEach(()=> { pageAdd.openThisPage(); });

    it('確定ボタン押せる', ()=> {
      expect(pageAdd.submitBtn.isPresent()).toBe(true);
    });

    it('豆の銘柄が入力できる', ()=> {
      expect(pageAdd.brandInput.isPresent()).toBe(true);
    });

    it('豆の産地が入力できる', ()=> {
      expect(pageAdd.regionInput.isPresent()).toBe(true);
    });

    it('豆の量が入力できる', ()=> {
      expect(pageAdd.amountInput.isPresent()).toBe(true);
    });

    it('豆の入荷日が入力できる', ()=> {
      expect(pageAdd.importDateInput.isPresent()).toBe(true);
    });
  });

  describe('遷移', ()=> {
    it('リスト画面から新規登録画面に遷移できること', ()=> {
      pageList.openAddPage();

      expect(pageAdd.submitBtn.isPresent()).toBe(true);
    });
  });
});
