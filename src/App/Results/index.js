// @flow
import * as React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
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
  const [visibility, setVisibility] = React.useState('hidden');

  const handleClick = (object) => {
    saved.push(object);
    setSaved(saved);
  };

  const styles = StyleSheet.create({
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
  });

  return (
    <div
      className={css(styles.panel)}
      onMouseEnter={() => setVisibility('visible')}
      onMouseLeave={() => setVisibility('hidden')}
    >
      <h1 className={css(styles.header)}>
        {'Results'}
      </h1>
      {results.map((o) => (
        <div key={o.id}>
          <Card {...o}/>
          <Button
            className={css(styles.button)}
            id={o.id}
            funcType="add"
            onClick={() => handleClick(o)}
          />
        </div>
      ))}
    </div>
  );
};

export default Results;
