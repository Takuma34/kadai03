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
    localStorage.setItem("担当 ", v);
    localStorage.setItem("From ", r);
    localStorage.setItem("名前 ", s);
    localStorage.setItem("電話番号 ", t);
    localStorage.setItem("宛先 ", u);
    localStorage.setItem("内容 ", w);

    // const v = $("#yourNameOption").val();
    // const r = $("#fromWhoOption").val();
    // const s = $("#textBoxName").val();
    // const t = $("#textBoxTell").val();
    // const u = $("#textBoxTo").val();
    // const w = $("#message").val();
    // localStorage.setItem("担当 " + count + "回", v);
    // localStorage.setItem("From " + count + "回", r);
    // localStorage.setItem("名前 " + count + "回", s);
    // localStorage.setItem("電話番号 " + count + "回", t);
    // localStorage.setItem("宛先 " + count + "回", u);
    // localStorage.setItem("内容 " + count + "回", w);
    // console.log(v, r, s, t, u, w);

    alert("保存");
    count++;
  });
});

//2.remove クリックイベント

$("#remove").on("click", function () {
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
});

//3.clear クリックイベント
$("#clear").on("click", function () {
  if (confirm("本当に削除しますか？")) {
    localStorage.clear();
    localStorage.removeItem("担当");
    alert("削除しました");
  }
});

//4.履歴の表示
$("#echo").on("click", function () {
  let count = localStorage.getItem("受付番号") || 0;
  count++;
  localStorage.setItem("受付番号", count);
  $("#list").append("<br>", "履歴" + count, "<br>");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = ` <table id="showList"> 
    <tr>
    <td class="show" style="text-align:left;width:100px;border-bottom: 1px solid #bfbfbf;
　　">${key}</td> 
    <td class="show" style="text-align:left;width:300px;border-bottom: 1px solid #bfbfbf;
    border-left: 1px solid #bfbfbf;">${value}</td>
    </tr>
    </table> `;
    $("#list").append(html);
  }
});
