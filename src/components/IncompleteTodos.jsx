export const IncompleteTodos = (props) => {
   const {todos, onClickComplete, onClickDelete} = props;
    return (
        <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
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
    );
};