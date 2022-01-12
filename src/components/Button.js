// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  funcType: 'add' | 'remove' | 'disable',
  id: string,
  cursor: 'default' | 'pointer',
  isButtonDisabled?: boolean,
  onClick: (any) => void,
  children: React.Node,
};

const buttonStyles = [
  {
    type: 'add',
    value: {
      border: '2px solid green',
      backgroundColor: '#DEFFE1',
      color: 'green',
    }
  },
  {
    type: 'remove',
    value: {
      border: '2px solid red',
      backgroundColor: '#FFE4E1',
      color: 'red',
    }
  },
  {
    type: 'disable',
    value: {
      border: '2px solid black',
      backgroundColor: 'white',
      color: 'black',
    }
  }
];

const Button = ({
  funcType,
  id,
  cursor,
  isButtonDisabled = false,
  onClick,
  children,
}: Props): React.Node => {
  const index = buttonStyles.findIndex(o => o.type === funcType);

  const styles = StyleSheet.create({
    button: {
      borderRadius: '20px',
      cursor,
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
      ...buttonStyles[index].value,
    },
    disabledButton: {
      border: `2px solid grey`,
      borderRadius: '20px',
      backgroundColor: 'light grey',
      color: 'grey',
      cursor,
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
    }
  });

  return (
    <div>
      <button
        className={isButtonDisabled ? css(styles.disabledButton) : css(styles.button)}
        data-testid={`${funcType}-button-${id}`}
        disabled={isButtonDisabled}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
