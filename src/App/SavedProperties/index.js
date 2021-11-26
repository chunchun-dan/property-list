// @flow
import * as React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

type Props = {
  saved: any,
  setSaved: (any) => void,
};

const SavedProperties = ({
  saved,
  setSaved,
}: Props): React.Node => {
  const buttonText = "Remove Property";
  const [visibility, setVisibility] = React.useState('hidden');

  const handleClick = (object) => {
    const index = saved.findIndex((element) => element.id === object.id);
    saved.splice(index, 1);
    setSaved(saved);
  };

  const styles = {
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
  };

  React.useEffect(() => {

  }, [saved]);

  return (
    <div
      style={styles.panel}
      onMouseEnter={() => setVisibility('visible')}
      onMouseLeave={() => setVisibility('hidden')}
    >
      <h1 style={styles.header}>
        {'Saved'}
      </h1>
      {saved.map((o) => (
        <div key={o.id}>
          <Card {...o} />
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

export default SavedProperties;
