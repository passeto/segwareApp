import { combineReducers } from 'redux';
import auth from '../login/reducers/auth';
import feed from '../feed/reducers/feed';

export default combineReducers({
  auth,
  feed,
});
