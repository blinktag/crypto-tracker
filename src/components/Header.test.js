import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header renders', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Header />,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});