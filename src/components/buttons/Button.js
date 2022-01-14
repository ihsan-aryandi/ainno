import React from 'react'
import styles from './Button.module.css'

export default function Button({ className, label = "", type }) {
    return (
        <button className={`${styles.button} ${className}`} type={type}>{label}</button>
    )
}
