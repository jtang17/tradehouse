import React from 'react';
import {shallow, configure } from 'enzyme';
import CheckboxWithLabel from '../Checkbox.jsx';

// Enzyme clauses
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Tests
test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  console.log(checkbox);
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');

  checkbox.find('input').simulate('click');
  checkbox.find('input').simulate('click');

  expect(checkbox.text()).toEqual('On');
});