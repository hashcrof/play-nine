import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Game from './Game'

it('should have a title', () =>{
  const wrapper = mount(<Game />)
  const h3 = wrapper.find('h3')
  expect(h3.text()).toMatch('Play Nine')
});

it('should have a randomNumberOfStars less than or equal to 9', () =>{
  const output = shallow(<Game />)

  expect(output.state().randomNumberOfStars).toBeTruthy()
  expect(output.state().randomNumberOfStars).toBeLessThanOrEqual(9)
});
