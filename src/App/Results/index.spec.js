// @flow
import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import Results from 'App/Results';

describe('<Results />', () => {
  const results = [
    {
      price: '$100',
      agency: {
        brandingColors: {
          primary: 'results-color-1',
        },
        logo: 'results-logo-1',
      },
      id: '2',
      mainImage: 'results-image-1',
    },
  ];

  const saved = [
    {
      price: '$100',
      agency: {
        brandingColors: {
          primary: 'saved-color-1',
        },
        logo: 'saved-logo-1',
      },
      id: '1',
      mainImage: 'saved-image-1',
    },
  ];

  const setSavedFunc = jest.fn();

  const props = {
    results,
    saved,
    setSaved: setSavedFunc,
  };

  it('renders Results component', () => {
    render(
      <Results {...props} />
    );

    expect(screen.getByTestId('results-list')).not.toBeNull();
    expect(screen.getByTestId('results-list-title').textContent).toBe('Results');
    expect(screen.getByTestId('card-2')).not.toBeNull();
  });

  it('renders Add Property button when hovering over results card', () => {
    render(
      <Results {...props} />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-2'));
    expect(screen.getByTestId('add-button-2')).not.toBeNull();
  });

  it('calling setSaved function when clicking Add Property button', async () => {
    render(
      <Results {...props} />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-2'));
    fireEvent.click(screen.getByTestId('add-button-2'));

    await waitFor(() => expect(setSavedFunc).toHaveBeenCalledWith(
      [{
        price: '$100',
        agency: {
          brandingColors: {
            primary: 'saved-color-1',
          },
          logo: 'saved-logo-1',
        },
        id: '1',
        mainImage: 'saved-image-1',
        },
        {
          price: '$100',
          agency: {
            brandingColors: {
              primary: 'results-color-1',
            },
            logo: 'results-logo-1',
          },
          id: '2',
          mainImage: 'results-image-1',
        }]
    ))
  });

  it('disables Add Property button if results property exists in saved properties', () => {
    const results = [
      {
        price: '$100',
        agency: {
          brandingColors: {
            primary: 'results-color-1',
          },
          logo: 'results-logo-1',
        },
        id: '2',
        mainImage: 'results-image-1',
      },
    ];

    const saved = [
      {
        price: '$100',
        agency: {
          brandingColors: {
            primary: 'results-color-1',
          },
          logo: 'results-logo-1',
        },
        id: '2',
        mainImage: 'results-image-1',
      },
    ];

    render(
      <Results
        {...props}
        saved={saved}
        results={results}
      />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-2'));

    const addButton : HTMLButtonElement = (screen.getByTestId('add-button-2'): any);
    expect(addButton.disabled).toBe(true);
  });

  it('disables Add Property button after adding results property to save properties', () => {
    render(
      <Results {...props} />
    );

    fireEvent.mouseEnter(screen.getByTestId('card-2'));
    fireEvent.click(screen.getByTestId('add-button-2'));

    const addButton : HTMLButtonElement = (screen.getByTestId('add-button-2'): any);
    expect(addButton.disabled).toBe(true);
  });

  it('call handleDisable button when clicking the disable button', () => {
    render(
      <Results {...props} />
    )

    fireEvent.mouseEnter(screen.getByTestId('card-2'));
    const disableButton: HTMLButtonElement = (screen.getByTestId('disable-button-2'): any);
    expect(disableButton).not.toBeNull();

    fireEvent.click(disableButton);
  })
});
