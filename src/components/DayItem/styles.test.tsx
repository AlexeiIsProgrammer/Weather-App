import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import { DayWrapper } from './styles';

test('should change color of inactive element', () => {
  const wrapper = renderer.create(<DayWrapper $active={false} />).toJSON();

  expect(wrapper).toHaveStyleRule('color', 'black');
  expect(wrapper).toHaveStyleRule('background-color', 'white');
});

test('should change color of active element', () => {
  const wrapper = renderer.create(<DayWrapper $active />).toJSON();

  expect(wrapper).toHaveStyleRule('color', 'white');
  expect(wrapper).toHaveStyleRule('background-color', 'blue');
});
