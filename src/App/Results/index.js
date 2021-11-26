// @flow
import * as React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

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
  const buttonText = 'Add Property';

  const handleClick = (object) => {
    saved.push(object);
    console.log(saved);
    setSaved(saved);
  };

  const styles = {
    panel: {
      width: '640px',
      ':hover': {

      }
    },
    header: {
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.panel}>
      <h1 style={styles.header}>
        {'Results'}
      </h1>
      {results.map((o) => (
        <div key={o.id}>
          <Card {...o}/>
          <Button value={buttonText} onClick={() => handleClick(o)}/>
        </div>
      ))}
    </div>
  );
};

export default Results;
