import { useState } from 'react';
import './App.css';
import store from './store/index';
import { connect } from 'react-redux';
import Count from './components/count';

function App({ count }) {
  return (
    <>
      <div>
        <h1>Redux Learn</h1>
        <p>Count:{count}</p>
        <Count />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
