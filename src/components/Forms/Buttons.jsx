import React from 'react'
import styles from './Button.module.css'

const Buttons = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Buttons