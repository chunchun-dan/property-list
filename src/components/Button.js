// @flow
import * as React from 'react';
import { StyleSheet, css } from "aphrodite/src/no-important";

type Props = {
  funcType: 'add' | 'remove',
  id: string,
  cursor: 'default' | 'pointer',
  isButtonDisabled?: boolean,
  onClick: (any) => void,
};

const Button = ({
  funcType,
  id,
  cursor,
  isButtonDisabled = false,
  onClick,
}: Props): React.Node => {
  const isAdd = funcType === 'add';

  React.useEffect(() => {

  }, [isButtonDisabled]);

  const styles = StyleSheet.create({
    button: {
      border: `2px solid ${isAdd ? 'green' : 'red'}`,
      borderRadius: '20px',
      backgroundColor: isAdd ? '#DEFFE1' : '#FFE4E1',
      color: isAdd ? 'green' : 'red',
      cursor,
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
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
    <button
      className={isButtonDisabled ? css(styles.disabledButton) : css(styles.button)}
      data-testid={`${funcType}-button-${id}`}
      disabled={isButtonDisabled}
      type="button"
      onClick={onClick}
    >
      {funcType === 'add'? 'Add Property' : 'Remove Property' }
    </button>
  );
}

export default Button;
