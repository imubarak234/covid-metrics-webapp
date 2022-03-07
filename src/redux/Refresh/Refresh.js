const ADD_DATA = 'covid-metrics-webapp/Refresh/ADD_DATA';
const SELECT = 'covid-metrics-webapp/Refresh/SELECT';

// The intial state of store with the refresh reducer
const initialState = [];

/**
 * @function addFresh - takes in an object and returns an object with type property
 * and the object in the argument
 */
export const addFresh = (payload) => ({
  type: ADD_DATA,
  payload,
});

/**
 * @function select - takes in a string mostly likely the id of an object in store
 * and returns an object with a type property with the id property
 */
export const select = (payload) => ({
  type: SELECT,
  payload,
});

/**
 * @function refreshReducer - using a switch state the function handles specific returns
 * based on specific arguments the result of which manipulates the redux store.
 * @param {Array} state - the array of the present redux store
 * @param {Function} action
 * @returns
 */
const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case SELECT:
      return state.map((next) => {
        if (next.continent === action.payload) {
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

export default refreshReducer;
