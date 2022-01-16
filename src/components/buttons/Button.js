import React from 'react'
import styles from './Button.module.css'

export default function Button({ 
    className = '', 
    label = "", 
    type = 'button', 
    transparent = false,
    full = false, 
    padding = '' 
}) {
    let buttonClass = styles.button
    let style = {}

    if (transparent) {
        buttonClass = styles['button-transparent']
    }

    if (full) {
        buttonClass += ` ${styles['full']}`
    }

    if (padding !== '') {
        style.padding = padding
    }

    return (
        <button 
            className={`${buttonClass} ${className}`} 
            type={type} 
            style={style}>{label}</button>
    )
}
