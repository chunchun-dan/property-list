// @flow
import * as React from 'react';
import { StyleSheet, css } from "aphrodite/src/no-important";

type Props = {
  funcType: 'add' | 'remove',
  id: string,
  onClick: (any) => void,
};

const Button = ({
  funcType,
  id,
  onClick,
}: Props): React.Node => {
  const isAdd = funcType === 'add';

  const styles = StyleSheet.create({
    button: {
      border: `2px solid ${isAdd ? 'green' : 'red'}`,
      borderRadius: '20px',
      backgroundColor: isAdd ? '#DEFFE1' : '#FFE4E1',
      color: isAdd ? 'green' : 'red',
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
    }
  });

  return (
    <button
      className={css(styles.button)}
      data-testid={`${funcType}-button-${id}`}
      type="button"
      onClick={onClick}
    >
      {funcType === 'add'? 'Add Property' : 'Remove Property' }
    </button>
  );
}

export default Button;
