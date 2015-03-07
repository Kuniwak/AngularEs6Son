describe('豆追加画面', ()=> {
  var pageAdd = require('./components/add.po.js');
  var pageList = require('./components/list.po.js');

  describe('表示の振る舞い', ()=> {
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

  describe('遷移の振る舞い', ()=> {
    // ページの表示完了確認には、遷移先のページの要素の表示状況を使うことになる。
    // そのため、遷移のテストは遷移先のページ構造を知る必要がある。テスト対象の
    // 変更が対応するテストに影響することが望ましいため、遷移先のページに遷移に
    // 関するテストを記述する。
    it('リスト画面から豆追加画面へ遷移できること', ()=> {
      pageList.openAddPage();

      expect(pageAdd.submitBtn.isPresent()).toBe(true);
    });
  });
});
