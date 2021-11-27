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
  const [visibility, setVisibility] = React.useState('hidden');

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
    },
    button: {
      border: '2px solid red',
      borderRadius: '20px',
      backgroundColor: '#FFE4E1',
      color: 'red',
      width: '600px',
      height: '30px',
      position: 'relative',
      left: '20px',
      top: '-100px',
      visibility: visibility,
    }
  });

  React.useEffect(() => {

  }, [saved]);

  return (
    <div
      className={css(styles.panel)}
      onMouseEnter={() => setVisibility('visible')}
      onMouseLeave={() => setVisibility('hidden')}
    >
      <h1 className={css(styles.header)}>
        {'Saved'}
      </h1>
      {saved.map((o) => (
        <div key={o.id}>
          <Card {...o} />
          <Button
            className={css(styles.button)}
            id={o.id}
            funcType="remove"
            onClick={() => handleClick(o)}
          />
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
