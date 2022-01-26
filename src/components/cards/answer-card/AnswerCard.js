import Line from 'components/lines/Line';
import Vote from 'components/votes/Vote';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AnswerCard.module.css'

export default function AnswerCard() {
    return (
        <div className={styles['answer-card']}>
            <div className={styles['answer-card-header']}>
                <div className={styles['answer-card-profile']}>
                    <Link to='/profile/username-here'>
                        <img className='img-rounded' src='/images/profile-example.jpg' alt='profile' style={{ width: '3.2rem', height: '3.2rem' }} />
                    </Link>
                    <Link className='default-color text-decoration-none f-1 medium ml-2' to='/profile/username-here'>ihsanaryandi</Link>
                    <span className='light default-color ml-4'>01-01-2001 14:30</span>
                </div>
            </div>
            <Line />
            <div className={styles['answer-card-body']}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet animi consequuntur pariatur vero omnis tenetur veritatis odio! Amet assumenda qui quaerat consequatur architecto omnis, itaque dolore sed soluta maxime.</p>
            </div>
            <Line />
            <div className={styles['answer-card-footer']}>
                <Vote className='mb-5' />
                <div className='main-color1 user-select-none cursor-pointer'>Lihat 12 komentar</div>
            </div>
        </div>
    );
}
