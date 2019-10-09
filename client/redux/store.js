import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';

const initsStore = initialState => createStore(reducers, initialState, composeWithDevTools());

export default initsStore;
