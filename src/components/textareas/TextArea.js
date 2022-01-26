import React from 'react';
import appendClass from 'utils/class';
import styles from './TextArea.module.css'

export default function TextArea({
    id = '',
    placeholder = '',
    className = ''
}) 
{

    return (
        <textarea className={appendClass(styles.textarea, className)} id={id} placeholder={placeholder} />
    );
}
