
$(function() {
  $('.menu-trigger').on('click', function(e) { // .menu-triggerクリック時
    $(this).toggleClass('active'); // クリックされた要素にactiveクラスをトグル（追加・削除）する
    $('#sp-menu').fadeToggle(); // #sp-menuをフェードイン・フェードアウトで表示・非表示する
    e.preventDefault(); // aタグのデフォルトの動作を無効にする
  });
});