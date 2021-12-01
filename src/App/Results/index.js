// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  results: Array<{
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  }>,
  saved: Array<{
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  }>,
  setSaved: (Array<{
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  }>) => void,
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
    listHeader: {
      textAlign: 'center',
    },
    listCard: {
      height: '600px',
    }
  });

  return (
    <div>
      <h1 className={css(styles.listHeader)}>
        {'Results'}
      </h1>
      {results.map((o) => (
        <div
          className={css(styles.listCard)}
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
