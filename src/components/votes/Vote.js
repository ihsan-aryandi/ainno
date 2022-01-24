import React, { useState } from 'react';
import ArrowIcon from 'components/icons/ArrowIcon';
import styles from './Vote.module.css'
import appendClass from 'utils/class';

export default function Vote({
    className = '',
    onUpVote,
    onDownVote,
    currentTotalVote = 0
}) {
    const [totalVote, setTotalVote] = useState(currentTotalVote)

    let handleUpVote
    let handleDownVote

    if (onUpVote !== undefined) {
        handleUpVote = () => onUpVote(setTotalVote)
    }

    if (onDownVote !== undefined) {
        handleDownVote = () => onDownVote(setTotalVote)
    }

    return (
        <div className={appendClass(styles['vote-container'], className)}>
            <ArrowIcon className={appendClass(styles.vote, styles['up-vote'])} width='1.3rem' height='1.3rem' onClick={handleUpVote} />
            <span className='default-color mx-4'>{totalVote}</span>
            <ArrowIcon className={styles.vote} width='1.3rem' height='1.3rem' onClick={handleDownVote} />
        </div>
    )
}
