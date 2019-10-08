import { combineReducers } from 'redux';
import mommentReducer from '../modules/home/reducers';

const rootReducer = combineReducers({
  momments: mommentReducer
});

export default rootReducer;
