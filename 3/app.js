// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = judgeHand();

if (user_hand === null) {
  alert("またチャレンジしてね");
} else {
  // じゃんけんの手をランダムに作成する関数を呼び出す
  let js_hand = getJShand();

  // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
  let judge = winLose(user_hand, js_hand);

  // 結果を表示する
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}

function judgeHand(){
  let hand;
  do {
    hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    if (hand === null) {
      return null; // キャンセルボタンが押された場合、nullを返す
    } else if (hand !== "グー" && hand !== "チョキ" && hand !== "パー") {
      alert("エラー：グー、チョキ、パーのいずれかを選んでください。");
    }
  } while (hand !== "グー" && hand !== "チョキ" && hand !== "パー");
  return hand;
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

