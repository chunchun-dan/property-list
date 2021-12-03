// @flow
import * as React from 'react';
import {
  screen,
  render,
} from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Card from 'components/Card';

describe('<Card />', () => {
  const props = {
    price: '$100',
    agency: {
      brandingColors: {
        primary: 'white',
      },
      logo: 'test/logo',
    },
    id: '1',
    mainImage: 'test/image',
  };

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders Card component', () => {
    render(
      <Card {...props} />
    );

    expect(screen.getByTestId('card-1')).not.toBeNull();
    expect(screen.getByTestId('card-header-1')).not.toBeNull();

    const logo : HTMLImageElement = (screen.getByTestId('card-logo-1'): any);
    expect(logo.src).toBe('http://localhost/test/logo');

    const image : HTMLImageElement = (screen.getByTestId('card-image-1'): any);
    expect(image.src).toBe('http://localhost/test/image');

    expect(screen.getByTestId('card-price-1').textContent).toBe('Price Guide $100');
  });
});
