import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import { BackgroundContainer } from './styles';

test('should remove opacity of unLoaded background', () => {
  const wrapper = renderer
    .create(<BackgroundContainer $backgroundImage="" $isLoaded={false} />)
    .toJSON();

  expect(wrapper).toHaveStyleRule('opacity', '0');
});

test('should add opacity of loaded background', () => {
  const wrapper = renderer
    .create(<BackgroundContainer $backgroundImage="" $isLoaded />)
    .toJSON();

  expect(wrapper).toHaveStyleRule('opacity', '1');
});
