// @flow
import * as React from 'react';

type Props = {
  value: string,
  onClick: (any) => void,
};

const Button = ({
  value,
  onClick,
}: Props): React.Node => {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
