import { combineReducers } from 'redux';
import statusModelCreate from '../modules/admin/reducers';

const rootReducer = combineReducers({
  adminStore: statusModelCreate
});

export default rootReducer;
