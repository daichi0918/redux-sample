import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './redux/counterSlice';
import { getUsers } from './redux/userSlice';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increase())}>Up</button>
        <button onClick={() => dispatch(decrease())}>Down</button>
        <h2>User</h2>
        {users &&
          users.map((user, index) => <div key={index}>{user.name}</div>)}
      </div>
    </>
  );
}

export default App;
