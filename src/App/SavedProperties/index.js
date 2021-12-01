// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  saved: any,
  setSaved: (any) => void,
};

const SavedProperties = ({
  saved,
  setSaved,
}: Props): React.Node => {
  const [itemId, setItemId] = React.useState(-1);

  const handleRemove = (index) => {
    setSaved(saved.filter((o, i) => i !== index));
  };

  const styles = StyleSheet.create({
    panel: {
      width: '640px'
    },
    header: {
      textAlign: 'center',
    }
  });

  React.useEffect(() => {

  }, [saved]);

  return (
    <div
      className={css(styles.panel)}
    >
      <h1 className={css(styles.header)}>
        {'Saved'}
      </h1>
      {saved.map((o, i) => (
        <div
          key={o.id}
          onMouseEnter={(e) => {
            const dataTestId = e.target.dataset.testid || '';
            const testIdString = dataTestId?.split('-');
            setItemId(testIdString[testIdString?.length - 1]);
          }}
          onMouseLeave={() => {
            setItemId(-1);
          }}
        >
          <Card {...o} />
          {(o.id === itemId) && <Button
            id={o.id}
            funcType="remove"
            onClick={() => handleRemove(i)}
          />}
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
