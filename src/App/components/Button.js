// @flow
import * as React from 'react';

type Props = {
  value: string,
  style?: any,
  onClick: (any) => void,
};

const Button = ({
  value,
  style,
  onClick,
}: Props): React.Node => {
  return (
    <button type="button" onClick={onClick} style={style}>
      {value}
    </button>
  );
}

export default Button;
