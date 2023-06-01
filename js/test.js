$("main").slideDown(1000);

//1.Save クリックイベント
$(document).ready(function () {
  let count = 1;
  $("#save").on("click", function () {
    let day = new Date();
    let dateString =
      day.getFullYear() +
      "年" +
      (day.getMonth() + 1) +
      "月" +
      day.getDate() +
      "日" +
      day.getHours() +
      "時" +
      day.getMinutes() +
      "分";
    localStorage.setItem("日付 ", dateString);

    const v = $("#yourNameOption").val();
    const r = $("#fromWhoOption").val();
    const s = $("#textBoxName").val();
    const t = $("#textBoxTell").val();
    const u = $("#textBoxTo").val();
    const w = $("#message").val();
    localStorage.setItem("担当 " + count, v);
    localStorage.setItem("From " + count, r);
    localStorage.setItem("名前 " + count, s);
    localStorage.setItem("電話番号 " + count, t);
    localStorage.setItem("宛先 " + count, u);
    localStorage.setItem("内容 " + count, w);
    alert("保存");
    count++;
    remove();
  });
});

//2.remove クリックイベント

// remove 関数 //
function remove() {
  $("#yourNameOption").html(`<select id="yourNameOption" name="name">
    <option name="name">ーー</option>
    <option name="name">鈴木</option>
    <option name="name">田中</option>
    <option name="name">佐藤</option>
    <option name="name">阿部</option>
    <option name="name">渡辺</option>
  </select>`);

  $("#fromWhoOption").html(`<select id="fromWhoOption" name="from">
    <option name="from">ーー</option>
    <option name="from">病院</option>
    <option name="from">セールス</option>
    <option name="from">代理店</option>
    <option name="from">マーケティング</option>
    <option name="from">その他</option>
  </select>`);

  $("#textBoxName").val("");
  $("#textBoxTell").val("");
  $("#textBoxTo").val("");
  $("#message").val("");

  $("#howTo").html(`<select id="howTo" name="how">
    <option name="how">ーー</option>
    <option name="how">自分</option>
    <option name="how">エンジニア</option>
    <option name="how">社員</option>
    <option name="how">その他</option>
  </select>`);
}
$("#remove").on("click", function () {
  remove();
});

//3.clear クリックイベント
$("#clear").on("click", function () {
  if (confirm("本当に削除しますか？")) {
    localStorage.clear();
    alert("削除しました");
    $("#list").html("");
  }
});

//4.履歴の表示
$("#echo").on("click", function () {
  $("#list").html("");

  const history = {}; // chatGPT  履歴を格納するオブジェクト

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const match = key.match(/^(.+)\s(\d+)$/); // キーの後ろの番号を抽出する正規表現

    if (match) {
      const mainKey = match[1]; // キーの番号を取得
      const subKey = match[2]; // サブキー（番号）を取得

      if (!history[subKey]) {
        history[subKey] = {}; // 新しい番号の履歴オブジェクトを作成
      }

      history[subKey][mainKey] = value; // 履歴オブジェクトに値を追加
    }
  }

  for (const subKey in history) {
    $("#list").append("<br>", "履歴" + subKey, "<br>");
    const subHistory = history[subKey];
    for (const mainKey in subHistory) {
      const value = subHistory[mainKey];
      const html = ` <table id="showList"> 
        <tr>
        <td class="show" style="text-align:left;width:100px;border-bottom: 1px solid #bfbfbf;
        ">${mainKey}</td> 
        <td class="show" style="text-align:left;width:300px;border-bottom: 1px solid #bfbfbf;
        border-left: 1px solid #bfbfbf;">${value}</td>
        </tr>
        </table> `;
      $("#list").append(html);
    }
  }
});
