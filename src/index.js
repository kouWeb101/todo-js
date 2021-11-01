import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("js-add-text").value;
  document.getElementById("js-add-text").value = "";

  //liタグを生成
  const li = document.createElement("li");

  //pタグを生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert();
  });

  //button(削除)タグを生成
  const imcompleteButton = document.createElement("button");
  imcompleteButton.innerText = "削除";
  imcompleteButton.addEventListener("click", () => {
    alert();
  });

  //liタグの子要素にタグを追加
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(imcompleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};
document.getElementById("js-add").addEventListener("click", () => onClickAdd());
