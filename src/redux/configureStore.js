import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer from './Data';
import refreshReducer, { addFresh } from './Refresh/Refresh';
import data from './Refresh/RefreshData';

const reducer = combineReducers({
  dataReducer,
  refreshReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(addFresh(data));

export default store;
