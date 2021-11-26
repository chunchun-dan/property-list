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
  const [visibility, setVisibility] = React.useState('hidden');

  const handleClick = (object) => {
    saved.push(object);
    setSaved(saved);
  };

  const styles = {
    panel: {
      width: '640px',
    },
    header: {
      textAlign: 'center',
    },
    button: {
      border: '2px solid green',
      borderRadius: '20px',
      backgroundColor: '#DEFFE1',
      color: 'green',
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
      visibility: visibility,
    }
  };

  return (
    <div
      style={styles.panel}
      onMouseEnter={() => setVisibility('visible')}
      onMouseLeave={() => setVisibility('hidden')}
    >
      <h1 style={styles.header}>
        {'Results'}
      </h1>
      {results.map((o) => (
        <div key={o.id}>
          <Card {...o}/>
          <Button
            value={buttonText}
            onClick={() => handleClick(o)}
            style={styles.button}
          />
        </div>
      ))}
    </div>
  );
};

export default Results;
