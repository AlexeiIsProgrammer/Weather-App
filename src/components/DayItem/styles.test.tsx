import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import Theme from '@Theme';

import { DayWrapper } from './styles';

test('should change color of inactive element', () => {
  const wrapper = renderer
    .create(
      <Theme>
        <DayWrapper $active={false} />
      </Theme>
    )
    .toJSON();

  expect(wrapper).toHaveStyleRule('color', '#000');
  expect(wrapper).toHaveStyleRule('background-color', '#FFF');
});

test('should change color of active element', () => {
  const wrapper = renderer
    .create(
      <Theme>
        <DayWrapper $active />
      </Theme>
    )
    .toJSON();

  expect(wrapper).toHaveStyleRule('color', '#FFF');
  expect(wrapper).toHaveStyleRule('background-color', '#0000FF');
});
