// @flow
import * as React from 'react';
import Card from 'App/components/Card';
import Button from 'App/components/Button';
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

  const handleClick = (object) => {
    const index = saved.findIndex((element) => element.id === object.id);
    saved.splice(index, 1);
    setSaved(saved);
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
      {saved.map((o) => (
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
            onClick={() => handleClick(o)}
          />}
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
