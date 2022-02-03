/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
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

// const sort = (next, args) => {
//   const ans = [];
//   for (const i in next) {
//     if ((typeof next[i]) === 'object') {
//       console.log(next[i]);
//       next[i][0] = false;
//       if (i === args) next[i][0] = true;
//       const newObj = { i: next[i] };
//       ans.push(newObj);
//     }
//   }
//   console.log('ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp');
//   console.log(ans);
//   return ans;
// };

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
