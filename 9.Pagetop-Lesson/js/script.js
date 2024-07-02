$(function() {
  $('#back a').on('click',function(event){// #back内のaタグがクリックされたとき
    $('body, html').animate({//animate()：アニメーション効果を設定するjQueryの関数
      scrollTop:0//変化対象のプロパティ名:変化値
    }, 800);//アニメーションの動作時間
    event.preventDefault(); //aタグの機能を無効にするメソッド
  });
});