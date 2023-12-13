import React from 'react'
import styles from '../styles/sale-banner.module.css';

export default function Banner  () {
  return (
    <div className={styles['sale-banner']}>
      <div className={styles['text']}>SUMMER SALE - CODE: SUMMER25 FOR 25% OFF - ENDS TODAY!</div>
    </div> 
  )
}
