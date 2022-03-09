import { createStore, combineReducers } from 'redux';
import userReduser from './reducers/user';

const rootReducer = combineReducers({
  user: userReduser,
});

const store = createStore(rootReducer);

export default store;
