// 初期設定、tab1以外を隠す
$('#tab-contents .tab[id != "tab1"]').hide();


// それぞれのタブがクリックされたとき
$('#tab-menu a').on('click', function(event) {//id="tab-menu"のaタグがクリックされたとき
  $("#tab-contents .tab").hide();// タブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active");// .removeClass()：クラス属性が設定されているHTML要素から、クラスを削除するメソッド(activeがついているtabのclassを削除)
  $(this).addClass("active");// .addClass()：任意のHTML要素にクラス属性を追加できるメソッド(クリックされたtabのクラスにactiveを追加)
  $($(this).attr("href")).show();// .attr()：HTML要素の属性を取得したり設定できるメソッド
  event.preventDefault();
});