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
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素(liタグ)を削除する
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //liタグの子要素にタグを追加
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};
document.getElementById("js-add").addEventListener("click", () => onClickAdd());
