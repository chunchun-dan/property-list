// @flow
import * as React from 'react';

type Props = {
  className: any,
  funcType: 'add' | 'remove',
  id: string,
  onClick: (any) => void,
};

const Button = ({
  className,
  funcType,
  id,
  onClick,
}: Props): React.Node => {
  return (
    <button
      data-testid={`${funcType}-button-${id}`}
      className={className}
      type="button"
      onClick={onClick}
    >
      {funcType === 'add'? 'Add Property' : 'Remove Property' }
    </button>
  );
}

export default Button;
