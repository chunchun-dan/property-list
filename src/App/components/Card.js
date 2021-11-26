// @flow
import * as React from 'react';

type Props = {
  price: string,
  agency: {
    brandingColors: {
      primary: string,
    },
    logo: string,
  },
  id: string,
  mainImage: string,
};

const Item = ({
  price,
  agency,
  id,
  mainImage,
}: Props): React.Node => {
  const {
    brandingColors: {
      primary,
    },
    logo,
  } = agency;

  const styles = {
    card: {
      border: '1px solid grey',
      borderRadius: '10px',
      boxShadow: '2px 2px lightgrey',
      width: '640px',
      ':hover': {
        border: '1px solid black'
      },
      marginBottom: '10px',
    },
    header:{
      backgroundColor: primary,
      borderRadius: '10px 10px 0 0',
      height: '40px',
    },
    logo: {
      marginTop: '4px',
      marginBottom: '4px',
      marginLeft: '5px',
    },
    image: {
    },
    footer: {
      padding: '10px',
    }
  };

  return (
    <div id={id} style={styles.card}>
      <div data-testid="item-header" style={styles.header}>
        <img
          data-testid="item-logo"
          src={logo}
          alt="Logo"
          style={styles.logo}
        />
      </div>
      <div>
        <img
          data-testid="item-image"
          src={mainImage}
          alt="Property"
        />
      </div>
      <div data-testid="item-price" style={styles.footer}>
        {`Price Guide ${price}`}
      </div>
    </div>
  );
};

export default Item;
