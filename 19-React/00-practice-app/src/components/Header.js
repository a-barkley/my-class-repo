import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    background: '#b71775',
    height: '200px',
  },
  
  bigHeader: {
    margin: 0,
    paddingTop: '75px',
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
  }
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element
  
  return (
    <header className="header" style={styles.header}>
      <h1 styles={styles.bigHeader}>Welcome</h1>
    </header>
  );
}

export default Header;
