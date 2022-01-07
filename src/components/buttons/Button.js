import React from 'react'
import styles from './Button.module.css'

export default function Button({ className, label }) {
    return (
        <button className={`${styles.button} ${className}`}>{label}</button>
    )
}
