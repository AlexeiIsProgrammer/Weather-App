import React from 'react';
import renderer from 'react-test-renderer';
import Theme from '@Theme';

import 'jest-styled-components';

import { RealInput } from './styles';

test('should change color of inactive element', () => {
  const wrapper = renderer
    .create(
      <Theme>
        <RealInput $error={false} />
      </Theme>
    )
    .toJSON();

  expect(wrapper).toHaveStyleRule('color', '#000');
});

test('should change color of active element', () => {
  const wrapper = renderer
    .create(
      <Theme>
        <RealInput $error />
      </Theme>
    )
    .toJSON();

  expect(wrapper).toHaveStyleRule('color', '#FF0000');
});
