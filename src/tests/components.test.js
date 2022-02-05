import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Naving from '../Components/Navbar';
import Home from '../Components/Home';
import Region from '../Components/Regions/RegionContainer';
import CountryPage from '../Components/Country/CountryContainer';

describe('Series of tests rendering of each major components', () => {
  it('Rendering of Navigation bar(Header) correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter to="/" className="navbar-brand">
          <Naving />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Country page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CountryPage />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Home page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Regions page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Region />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
