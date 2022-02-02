const ADD_DATA = 'covid-metrics-webapp/Refresh/ADD_DATA';

const initialState = [];

export const addFresh = (payload) => ({
  type: ADD_DATA,
  payload,
});

const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default refreshReducer;
