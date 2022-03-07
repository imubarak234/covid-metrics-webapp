const ADD_DATA = 'covid-metrics-webapp/Data/ADD_DATA';
const SELECTING = 'covid-metrics-webapp/Data/SELECTING';

// The intial state of store with the data reducer
const initialState = [];

/**
 * @function addData - takes in an object and returns an object with type property
 * and the object in the argument
 */
export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

/**
 * @function selecting - takes in a string mostly likely the id of an object in store
 * and returns an object with a type property with the id property
 */
export const selecting = (payload) => ({
  type: SELECTING,
  payload,
});

/**
 * @function dataReducer - using a switch state the function handles specific returns
 * based on specific arguments the result of which manipulates the redux store.
 * @param {Array} state - the array of the present redux store
 * @param {Function} action - A function from the other functions in this file
 * @returns
 */
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case SELECTING:
      return state.map((next) => {
        if (next.name === action.payload) {
          return ({
            ...next,
            picked: true,
          });
        }

        return ({
          ...next,
          picked: false,
        });
      });
    default:
      return state;
  }
};

export default dataReducer;
