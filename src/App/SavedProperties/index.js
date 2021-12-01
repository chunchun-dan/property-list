// @flow
import * as React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { StyleSheet, css } from 'aphrodite';

type Props = {
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
  setSaved: (
    Array<{
      price: string,
      agency: {
        brandingColors: {
          primary: string,
        },
        logo: string,
      },
      id: string,
      mainImage: string,
    }>
  ) => void,
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
    <div>
      <h1 className={css(styles.listHeader)}>
        {'Saved'}
      </h1>
      {saved.map((o, i) => (
        <div
          className={css(styles.listCard)}
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
