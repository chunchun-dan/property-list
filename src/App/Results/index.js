// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  results: any,
  saved: any,
  setSaved: (any) => void,
};

const Results = ({
  results,
  saved,
  setSaved,
}: Props): React.Node => {
  const [itemId, setItemId] = React.useState(-1);

  const handleAdd = (object) => {
    setSaved([...saved, object]);
  };

  const styles = StyleSheet.create({
    panel: {
      width: '640px',
    },
    header: {
      textAlign: 'center',
    }
  });

  return (
    <div
      className={css(styles.panel)}
    >
      <h1 className={css(styles.header)}>
        {'Results'}
      </h1>
      {results.map((o) => (
        <div
          key={o.id}
          onMouseEnter={(e) => {
            const dataTestId = e.target.dataset.testid || '';
            const testIdString = dataTestId?.split('-');
            setItemId(testIdString[testIdString?.length - 1]);
          }}
          onMouseLeave={() => setItemId(-1)}
        >
          <Card
            {...o}
          />
          {(o.id === itemId) && <Button
            id={o.id}
            funcType="add"
            onClick={() => handleAdd(o)}
          />}
        </div>
      ))}
    </div>
  );
};

export default Results;
