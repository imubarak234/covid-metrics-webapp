/* eslint-disable no-restricted-syntax */

/**
 * @file configureStore - This file contains the redux store
 * The Main reducer which is a combination of the both the dataReducer
 * and refreshReducer. The fetch function to the COVID API and a sort
 * method to proper;y sort the recieved data.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer, { addData, selecting } from './Data';
import refreshReducer, { addFresh } from './Refresh/Refresh';
import data from './Refresh/RefreshData';

/**
 * @const reducer - The combine reducers of dataReducer
 * refreshReducer
 */
const reducer = combineReducers({
  dataReducer,
  refreshReducer,
});

/**
 * @constant store - Using the creatStore function a redux
 * store is initialized with a const name store
 */
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

for (let x = 0; x < data.length; x += 1) store.dispatch(addFresh(data[x]));

/**
 * @function sort - Sorts a given data object into a different format
 * @param {object} obj - Object data type
 * @returns {Array} - Sorted array to a certain format
 */
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

/**
 * @function fetchData - Fetchs COVID data from API and sorts it using
 * the sort function.
 */
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
