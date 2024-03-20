import { useEffect, useState } from "react";
import './styles.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力された値を基に更新するTODOの値を保存する
  const onchangeTodoText = (event) => setTodoText(event.target.value); 

  // 追加ボタンを押下時、未完了リストに入力されたTODOを追加する
  const onClickAdd = () => {
    // if文省略型
    if (todoText === "") return;
    // 追加ボタンを押下した際に、incompleteTodosに入力された値が追加される
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  // mapのindexの値を基に、要素を削除する。
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 要素の削除 
    newTodos.splice(index, 1);
    // stateの更新
    setIncompleteTodos(newTodos);
  }

  // 完了ボタンを押下時mapのindexを基に、要素の削除・追加を行う
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 要素の削除 
    newIncompleteTodos.splice(index, 1);

    // 完了リストへの追加・の処理
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // stateの更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

    // 戻すボタンを押下時mapのindexを基に、要素の削除・追加を行う
    const onClickBack = (index) => {
      const newCompleteTodos = [...completeTodos];
      // 要素の削除 
      newCompleteTodos.splice(index, 1);
  
      //未完了リストへの追加・の処理
      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      // stateの更新
      setCompleteTodos(newCompleteTodos);
      setIncompleteTodos(newIncompleteTodos);
    }

  return (
    <>
      <div className="input-area">
        <input value={todoText} placeholder="TODOを入力" onChange= {onchangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            // 一意のキーを指定
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  {/* onClickは関数を渡す.関数の中身として渡す記述の仕方をする。(処理が実行されてしまうため) */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
