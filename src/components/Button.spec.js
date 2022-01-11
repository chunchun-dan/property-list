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
      <Button {...props} />
    );

    expect(screen.getByTestId('add-button-1')).not.toBeNull();
    expect(screen.getByTestId('add-button-1').textContent).toBe('Add Property');
  });

  it('renders remove property Button', () => {
    render(
      <Button
        {...props}
        funcType="remove"
      />
    );

    expect(screen.getByTestId('remove-button-1')).not.toBeNull();
    expect(screen.getByTestId('remove-button-1').textContent).toBe('Remove Property');
  });

  it('renders disabled Button', () => {
    render(
      <Button
        {...props}
        isButtonDisabled={true}
      />
    );

    const button : HTMLButtonElement = (screen.getByTestId('add-button-1'): any);
    expect(button).not.toBeNull();
    expect(button.disabled).toBe(true);
  });

  it('calls onClick function when clicking the button', async () => {
    render(
      <Button {...props} />
    );

    fireEvent.click(screen.getByTestId('add-button-1'));
    await waitFor(() => expect(onClickFunc).toHaveBeenCalled());
  });
});
