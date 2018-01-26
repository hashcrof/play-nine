import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Stars from './Stars'

const generateRandomNumberOfStars = () => {
  return 1 + Math.floor(Math.random() * 9)
}

it('renders the Stars component', () =>{
  const output = shallow(
    <Stars numberOfStars={3} />
  )
  expect(shallowToJson(output)).toMatchSnapshot()
});

it('has a certain number of stars', () =>{
  const numberOfStars = generateRandomNumberOfStars()
  const wrapper = mount(
    <Stars numberOfStars={numberOfStars} />
  )

  const div = wrapper.find('div.stars')
  expect(div.props().children).toHaveLength(numberOfStars)
});
