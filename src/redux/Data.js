const ADD_DATA = 'covid-metrics-webapp/Data/ADD_DATA';

const initialState = [];

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default dataReducer;
