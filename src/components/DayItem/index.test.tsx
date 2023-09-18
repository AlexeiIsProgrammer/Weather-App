import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import { DayTemp } from './styles';
import 'jest-styled-components';

test('renders dayitem wrapper', () => {
  const wrapper = renderer.create(<DayTemp />).toJSON();
  expect(wrapper).toHaveStyleRule('font-weight', '600');
});
