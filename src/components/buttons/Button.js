import React from 'react'
import styles from './Button.module.css'

export default function Button({ className, label = "", type = 'button', style = {} }) {
    return (
        <button className={`${styles.button} ${className}`} type={type} style={style}>{label}</button>
    )
}
