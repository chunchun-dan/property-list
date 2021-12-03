// @flow
import * as React from 'react';
import {
  screen,
  render,
} from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from 'App';

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders App', () => {
    render(
      <App />
    );

    expect(screen.getByTestId('results-list')).not.toBeNull();
    expect(screen.getByTestId('results-list-title')).not.toBeNull();
    expect(screen.getByTestId('saved-list')).not.toBeNull();
    expect(screen.getByTestId('saved-list-title')).not.toBeNull();
  });
});
