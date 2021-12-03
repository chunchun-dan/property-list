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

    expect(screen.getByTestId('item-header-1')).not.toBeNull();

    const logo : HTMLImageElement = (screen.getByTestId('item-logo-1'): any);
    expect(logo.src).toBe('http://localhost/test/logo');

    const image : HTMLImageElement = (screen.getByTestId('item-image-1'): any);
    expect(image.src).toBe('http://localhost/test/image');

    expect(screen.getByTestId('item-price-1')).not.toBeNull();
    expect(screen.getByText('Price Guide $100')).not.toBeNull();
  });
});
