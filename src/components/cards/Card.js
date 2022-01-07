import React from 'react'
import styles from './Card.module.css'

export default function Card({ children, className, maxWidth }) {
    return (
        <div className={`${styles.card} ${className}`} style={{ maxWidth }}>
            {children}
        </div>
    )
}
