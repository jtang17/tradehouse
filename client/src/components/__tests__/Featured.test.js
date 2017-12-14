import React from 'react';
import {shallow, configure } from 'enzyme';
import Featured from '../Featured.jsx';
import Header from '../Header.jsx';

// Enzyme clauses
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Featured.jsx renders an anchor to Channel View', () => {
	const featured = shallow(<Featured />);
	console.log('APP: ', featured);
	var header = JSON.stringify(featured.find('.channelViewLink'));
  console.log('HEADER: ',header);
});
