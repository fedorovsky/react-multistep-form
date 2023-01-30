import * as React from 'react';
import { render } from '@testing-library/react';
import ForTesting from '../ForTesting';

describe('ForTesting', () => {
  test('render', () => {
    render(<ForTesting />);
  });
});
