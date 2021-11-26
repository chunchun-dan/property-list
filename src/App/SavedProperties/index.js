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
  const styles = {
    panel: {
      width: '640px'
    },
    header: {
      textAlign: 'center',
    }
  };

  const handleClick = (object) => {
    const index = saved.findIndex((element) => element.id === object.id);
    saved.splice(index, 1);
    setSaved(saved);
  };

  React.useEffect(() => {

  }, [saved]);

  return (
    <div style={styles.panel}>
      <h1 style={styles.header}>
        {'Saved'}
      </h1>
      {saved.map((o) => (
        <div key={o.id}>
          <Card {...o} />
          <Button value={buttonText} onClick={() => handleClick(o)}/>
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
