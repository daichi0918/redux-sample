import { useState } from 'react';
import './App.css';
import store from './store/index';
import { connect, useSelector } from 'react-redux';
import Count from './components/count';

function App() {
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

export default App;
