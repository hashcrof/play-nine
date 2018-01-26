import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';
import Game from './components/Game'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders App component', () => {
  const output = shallow(
    <App>
      <Game />
    </App>
  );
  expect(shallowToJson(output)).toMatchSnapshot();
});
