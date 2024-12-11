import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doneList } from './store/todoSlice';
function App() {
  const lists = useSelector((state) => state.todos.lists);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => dispatch(doneList({ name: list.name }))}>
                完了
              </button>
            </div>
          ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <div key={index}>{list.name}</div>
          ))}
      </ul>
    </div>
  );
}

export default App;
