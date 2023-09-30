import Theme from '@Theme';
import React from 'react';
import renderer from 'react-test-renderer';

import { ErrorBlock } from './styles';

test('should render ErrorBlock', () => {
  renderer.create(
    <Theme>
      <ErrorBlock />
    </Theme>
  );
});
