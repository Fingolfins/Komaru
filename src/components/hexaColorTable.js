import React from 'react';
import styles from './styles.module.css';

const hexString = () => {  
    let string = '0123456789abcdef';
    let color = '';  
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * string.length);
      color += string[index];
    }
    const hexColor = '#' + color
    return hexColor
}

const HexTable = () => {
    const array = Array(32).fill(2)
    
    const tableHexColor = array.map((ii, i) => 
    <div key={i} style={{backgroundColor: hexString()}}>{hexString()}</div>)
    return <div className={styles.table}>{tableHexColor}</div>
}

export default HexTable;