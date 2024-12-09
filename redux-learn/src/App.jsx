import { useState } from 'react';
import './App.css';
import store from './store/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import Count from './components/count';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: 'INCREASE_COUNT' });
  };
  const decrease = () => {
    dispatch({ type: 'DECREASE_COUNT' });
  };
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>UP</button>
      <button onClick={decrease}>DOWN</button>
    </div>
  );
}

export default App;
