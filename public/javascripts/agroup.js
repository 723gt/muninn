function mousestc() {
    var doc = document;
    var body = doc.body;
    var stalker = doc.createElement("div");
    stalker.id = "stalker";
    stalker.innerHTML = '<img src="/public/images/hero.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる
    body.appendChild(stalker);

  body.addEventListener("mousemove", function(e) {
  stalker.style.left = e.clientX - 35 + "px"; //35 は要素の長さの半分
  stalker.style.top = e.clientY - 80 + "px"; //80 は縦の位置 各自調整
 }, false);

};