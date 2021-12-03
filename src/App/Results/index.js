// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  results: Array<{|
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  |}>,
  saved: Array<{|
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  |}>,
  setSaved: (Array<{|
    price: string,
    agency: {
      brandingColors: {
        primary: string,
      },
      logo: string,
    },
    id: string,
    mainImage: string,
  |}>) => void,
};

const Results = ({
  results,
  saved,
  setSaved,
}: Props): React.Node => {
  const [itemId, setItemId] = React.useState(-1);
  const [cursor, setCursor] = React.useState('default');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const handleAdd = (object) => {
    setIsButtonDisabled(true);
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
    <div data-testid="results-list">
      <h1
        className={css(styles.listHeader)}
        data-testid="results-list-title"
      >
        {'Results'}
      </h1>
      {results.map((o) => (
        <div
          className={css(styles.listCard)}
          data-testid={`result-item-${o.id}`}
          key={o.id}
          onMouseEnter={(e) => {
            const dataTestId = e.target.dataset.testid || '';
            const testIdString = dataTestId?.split('-');
            const id = Number(testIdString[testIdString?.length - 1]);
            if (saved.findIndex(o => Number(o.id) === id) > -1) {
              setIsButtonDisabled(true);
            }
            setItemId(id);
            setCursor('pointer');
          }}
          onMouseLeave={() => {
            setItemId(-1);
            setCursor('default');
            setIsButtonDisabled(false);
          }}
        >
          <Card
            {...o}
          />
          {(Number(o.id) === itemId) && <Button
            id={o.id}
            funcType="add"
            cursor={cursor}
            isButtonDisabled={isButtonDisabled}
            onClick={() => handleAdd(o)}
          />}
        </div>
      ))}
    </div>
  );
};

export default Results;
