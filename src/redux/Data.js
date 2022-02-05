const ADD_DATA = 'covid-metrics-webapp/Data/ADD_DATA';
const SELECTING = 'covid-metrics-webapp/Data/SELECTING';

const initialState = [];

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const selecting = (payload) => ({
  type: SELECTING,
  payload,
});

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
