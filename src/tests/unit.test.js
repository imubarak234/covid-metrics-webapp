import refreshReducer, { addFresh, select } from '../redux/Refresh/Refresh';
import dataReducer, { addData, selecting } from '../redux/Data';

describe('Series of tests for the Refresh folder pure redux functions', () => {
  it('Testing the return of addFresh function', () => {
    const payload = 'TEsting';

    const ans = addFresh(payload);

    expect(ans).toEqual({
      type: 'covid-metrics-webapp/Refresh/ADD_DATA',
      payload,
    });
  });

  it('Testing the return of the select function', () => {
    const payload = 'More Testing';

    const ans = select(payload);

    expect(ans).toEqual({
      type: 'covid-metrics-webapp/Refresh/SELECT',
      payload,
    });
  });

  it('Testing the refresh reducer', () => {
    const initialState = [];

    const action = {
      type: 'covid-metrics-webapp/Refresh/ADD_DATA',
      payload: 'LuckNumber',
    };

    const ans = refreshReducer(initialState, action);

    expect(ans).toEqual(['LuckNumber']);
  });
});

describe('Series of tests for the Data file pure redux functions', () => {
  it('Testing the return of addData function', () => {
    const payload = 'TEsting';

    const ans = addData(payload);

    expect(ans).toEqual({
      type: 'covid-metrics-webapp/Data/ADD_DATA',
      payload,
    });
  });

  it('Testing the return of the select function', () => {
    const payload = 'More Testing';

    const ans = selecting(payload);

    expect(ans).toEqual({
      type: 'covid-metrics-webapp/Data/SELECTING',
      payload,
    });
  });

  it('Testing the refresh reducer', () => {
    const initialState = [];

    const action = {
      type: 'covid-metrics-webapp/Data/ADD_DATA',
      payload: 'LuckNumber',
    };

    const ans = dataReducer(initialState, action);

    expect(ans).toEqual(['LuckNumber']);
  });
});
