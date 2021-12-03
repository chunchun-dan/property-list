// @flow
import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import SavedProperties from 'App/SavedProperties';

describe('<SavedProperties', () => {
  const saved = [
    {
      price: '$100',
      agency: {
        brandingColors: {
          primary: 'test-color-1',
        },
        logo: 'test-logo-1',
      },
      id: '1',
      mainImage: 'test-image-1',
    },
  ];

  const setSavedFunc = jest.fn();

  const props = {
    saved,
    setSaved: setSavedFunc,
  }

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders SavedProperties component', () => {
    render(
      <SavedProperties {...props} />
    );

    expect(screen.getByTestId('saved-list')).not.toBeNull();
    expect(screen.getByTestId('saved-list-title').textContent).toBe('Saved');
    expect(screen.getByTestId('card-1')).not.toBeNull();
  });

  it('renders Remove Property button when hovering over saved card', () => {
    render(
      <SavedProperties {...props} />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-1'));

    expect(screen.getByTestId('remove-button-1')).not.toBeNull();
  });

  it('calls setSaved function when clicking Remove Property button', async () => {
    render(
      <SavedProperties {...props} />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-1'));
    fireEvent.click(screen.getByTestId('remove-button-1'));

    await waitFor(() => expect(setSavedFunc).toHaveBeenCalledWith([]));
  });
});
