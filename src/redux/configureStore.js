/* eslint-disable no-restricted-syntax */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer, { addData, selecting } from './Data';
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

for (let x = 0; x < data.length; x += 1) store.dispatch(addFresh(data[x]));

const sort = (obj) => {
  const ans = [];
  const newObj = obj.dates['2022-01-30'].countries;
  for (const i in newObj) {
    if ((typeof newObj[i]) === 'object') {
      const newerObj = {
        picked: false,
        ...newObj[i],
      };
      ans.push(newerObj);
    }
  }
  return ans;
};

export const fetchData = async () => {
  await fetch('https://api.covid19tracking.narrativa.com/api/2022-01-30')
    .then((response) => response.json())
    .then((data) => {
      const newData = sort(data);
      newData.map((next) => store.dispatch(addData(next)));
      store.dispatch(selecting('Albania'));
    });
};

fetchData();

export default store;
