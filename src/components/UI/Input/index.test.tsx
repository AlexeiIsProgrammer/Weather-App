import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import { RealInput } from './styles';

test('should change color of inactive element', () => {
  const wrapper = renderer.create(<RealInput $error={false} />).toJSON();

  expect(wrapper).toHaveStyleRule('color', 'black');
});

test('should change color of active element', () => {
  const wrapper = renderer.create(<RealInput $error />).toJSON();

  expect(wrapper).toHaveStyleRule('color', 'red');
});
