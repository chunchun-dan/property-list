// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
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
  setSaved: (
    Array<{|
      price: string,
      agency: {
        brandingColors: {
          primary: string,
        },
        logo: string,
      },
      id: string,
      mainImage: string,
    |}>
  ) => void,
};

const SavedProperties = ({
  saved,
  setSaved,
}: Props): React.Node => {
  const [itemId, setItemId] = React.useState(-1);
  const [cursor, setCursor] = React.useState('default');

  const handleRemove = (index) => {
    setSaved(saved.filter((o, i) => i !== index));
  };

  const styles = StyleSheet.create({
    listHeader: {
      textAlign: 'center',
    },
    listCard: {
      height: '600px',
    }
  });

  React.useEffect(() => {
  }, [saved]);

  return (
    <div data-testid="saved-list">
      <h1
        className={css(styles.listHeader)}
        data-testid="saved-list-title"
      >
        {'Saved'}
      </h1>
      {saved.map((o, i) => (
        <div
          className={css(styles.listCard)}
          data-testid={`saved-item-${o.id}`}
          key={o.id}
          onMouseEnter={(e) => {
            setItemId(() => {
              const dataTestId = e.target.dataset.testid || '';
              const testIdString = dataTestId?.split('-');
              return Number(testIdString[testIdString?.length - 1]);
            });
            setCursor('pointer');
          }}
          onMouseLeave={() => {
            setItemId(-1);
            setCursor('default');
          }}
        >
          <Card {...o} />
          {(Number(o.id) === itemId) && (<Button
            id={o.id}
            funcType="remove"
            cursor={cursor}
            onClick={() => handleRemove(i)}
          >
            {'Remove Property'}
          </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
