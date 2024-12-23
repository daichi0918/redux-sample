import { combineReducers, createStore } from 'redux';

// const countReducer = (
//   state = {
//     count: 50,
//   }
// ) => {
//   return state;
// };

// const postsReducer = (
//   state = {
//     posts: [
//       { id: 1, title: 'Reduxについて' },
//       {
//         id: 2,
//         title: 'ReduxのHooksについて',
//       },
//     ],
//   }
// ) => {
//   return state;
// };

// const rootReducer = combineReducers({
//   countReducer,
//   postsReducer,
// });

const initialStore = {
  count: 50,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
// console.log(store.getState());

export default store;
