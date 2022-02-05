const ADD_DATA = 'covid-metrics-webapp/Refresh/ADD_DATA';
const SELECT = 'covid-metrics-webapp/Refresh/SELECT';

const initialState = [];

export const addFresh = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const select = (payload) => ({
  type: SELECT,
  payload,
});

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
