import React from 'react';
import styles from '../header/header.module.css';

const ToggleCatMode = (props) => {
    const {toggleKomugi, toggleKomaru, toggleCocoa} = props.props  
    const time = new Date().getHours();
    if (time < 8) {
     return <button className={styles.catMode} onClick={toggleKomugi}>Komugi</button>
    } else if (time < 16) {
     return <button className={styles.catMode} onClick={toggleKomaru}>Komaru</button>
    } else {
     return <button className={styles.catMode} onClick={toggleCocoa}>Cocoa</button>
    }
  }

export default ToggleCatMode;