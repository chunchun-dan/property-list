// @flow
import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitFor,
 } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from 'components/Button';

describe('<Button />', () => {
  const onClickFunc = jest.fn();

  const props =  {
    funcType: 'add',
    id: '1',
    cursor: 'default',
    isButtonDisabled: false,
    onClick: onClickFunc,
  };

  it('renders add property Button', () => {
    render(
      <Button {...props}>{'Add Property'}</Button>
    );

    expect(screen.getByTestId('add-button-1')).not.toBeNull();
    expect(screen.getByTestId('add-button-1').textContent).toBe('Add Property');
  });

  it('renders remove property Button', () => {
    render(
      <Button
        {...props}
        funcType="remove"
      >{'Remove Property'}</Button>
    );

    expect(screen.getByTestId('remove-button-1')).not.toBeNull();
    expect(screen.getByTestId('remove-button-1').textContent).toBe('Remove Property');
  });

  it('renders disabled Button', () => {
    render(
      <Button
        {...props}
        isButtonDisabled={true}
      >{'Add Property'}</Button>
    );

    const button : HTMLButtonElement = (screen.getByTestId('add-button-1'): any);
    expect(button).not.toBeNull();
    expect(button.disabled).toBe(true);
  });

  it('calls onClick function when clicking the button', async () => {
    render(
      <Button {...props}>{'Add Property'}</Button>
    );

    fireEvent.click(screen.getByTestId('add-button-1'));
    await waitFor(() => expect(onClickFunc).toHaveBeenCalled());
  });

  it('calls onClick function when clicking the button with setDisabled', async () => {
    render(
      <Button
        {...props}
        funcType='disable'
      >{'Disable Button'}</Button>
    );

    fireEvent.click(screen.getByTestId('disable-button-1'));
    await waitFor(() => expect(onClickFunc).toHaveBeenCalled());
  });
});
