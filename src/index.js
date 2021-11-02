import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("js-add-text").value;
  document.getElementById("js-add-text").value = "";
  createList(inputText);
};
document.getElementById("js-add").addEventListener("click", () => onClickAdd());

//指定されたidの特定の子要素を削除
const deleteFromId = (target, from) => {
  document.getElementById(from).removeChild(target);
};

//リストを作成する関数
const createList = (text) => {
  //liタグを生成
  const li = document.createElement("li");
  //pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //削除
    deleteFromId(completeButton.parentNode, "imcomplete-list");

    const addTarget = completeButton.parentNode;
    //TODOのテキストを取得
    const text = addTarget.firstChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    //button(戻す)タグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親要素ごと完了リストから削除
      deleteFromId(backButton.parentNode, "complete-list");
      const addTarget = backButton.parentNode;
      //TODOのテキストを取得
      const text = addTarget.firstChild.innerText;
      createList(text);
    });
    //liタグの子要素にタグを追加
    li.appendChild(p);
    li.appendChild(backButton);
    //未完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromId(deleteButton.parentNode, "imcomplete-list");
  });

  //liタグの子要素にタグを追加
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};
