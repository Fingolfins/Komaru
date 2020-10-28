import React from 'react';
import numType from '../utils/-check-number-type';
import styles from './styles.module.css'

const numberArray = [1, 45, 87, 3, 8, 14, 125, 34, 25, 17, 23, 69, 48, 98, 41, 
    105, 32, 44, 61, 63, 64, 67, 68, 71, 72, 78, 75, 79, 81, 83, 85, 89]
  const TypeNumber = () => { 
    const table = numberArray.map((index) => 
    <div key={index} style={{backgroundColor: numType(index)}}>
      {index}
    </div>)
    return <div className={styles.table}>{table}</div>
  }
export default TypeNumber;