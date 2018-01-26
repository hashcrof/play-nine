import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Numbers from './Numbers'

const onNumberClickHandler = jest.fn()

it('renders the Numbers component', () =>{
  const output = shallow(
    <Numbers selectedNumbers={[2,4]} onNumberClickHandler={onNumberClickHandler}/>
  )
  expect(shallowToJson(output)).toMatchSnapshot()
});

it('renders nine numbers', () =>{
  const wrapper = mount(
    <Numbers selectedNumbers={[2,4]} onNumberClickHandler={onNumberClickHandler}/>
  )

  const div = wrapper.find('div.numbers')
  expect(div.props().children).toHaveLength(9)
});

it('calls onNumberClickHandler when a number is clicked', () =>{
  const wrapper = mount(
    <Numbers selectedNumbers={[2,4]} onNumberClickHandler={onNumberClickHandler}/>
  )

  const numberSpan = wrapper.find('span').first()
  const number = parseInt(numberSpan.text())
  numberSpan.simulate('click')
  expect(onNumberClickHandler).toBeCalledWith(number)
});
