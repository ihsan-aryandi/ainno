import React from 'react'

export default function Container({ children, className = '', maxWidth = '' }) {
    const styles = {}

    if (maxWidth !== '') {
        styles.maxWidth = maxWidth
    }

    return (
        <div className={`container ${className}`} style={styles}>{children}</div>
    )
}
