// import { createStore } from 'redux';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from './reducer';

// export default function store() {
//   // if (process.env.NODE_ENV !== 'production') {
//   //   return createStore(
//   //     reducer,
//   //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   //   );
//   // }

//   return createStore(reducer);
// }
import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';

// const enhancer = composeWithDevTools(
//   applyMiddleware(thunkMiddleware),
// );

const initsStore = initialState => createStore(reducers, initialState, composeWithDevTools());

export default initsStore;