import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import dataReducer from './Data';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  dataReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;