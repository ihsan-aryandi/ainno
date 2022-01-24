import React from 'react'
import { Link } from 'react-router-dom'
import Vote from 'components/votes/Vote'
import styles from './QuestionCard.module.css'
import appendClass from 'utils/class'

export default function QuestionCard({ 
    className = '', 
    style = {},
    totalAnswer = 0 
}) {

    return (
        <div className={appendClass(styles['question-card'], className)} style={style}>
            <h1 className={styles['question-card-title']}>
                <Link className='default-color text-decoration-none' to='/question/10/bagaimana-cara-memulai-bisnis'>Bagaimana cara memulai bisnis ?</Link>
            </h1>
            <div className={styles['question-card-profile']}>
                <Link to='/profile/username-here'>
                    <img className='img-rounded' src='/images/profile-example.jpg' alt='profile' style={{ width: '3.2rem', height: '3.2rem' }} />
                </Link>
                <Link className='default-color text-decoration-none f-1 medium ml-2' to='/profile/username-here'>ihsanaryandi</Link>
                <span className='light default-color ml-4'>01-01-2001 14:30</span>
            </div>
            <div className={styles['question-card-body']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, pariatur illo fugit maxime ab enim corrupti veritatis deleniti facilis. Neque cupiditate quaerat assumenda labore laborum aspernatur mollitia at dolore illum.</p>
            </div>
            <div className={styles['question-card-footer']}>
                <Vote />
                <span className={totalAnswer > 0 ? 'main-color1' : 'grey-color3 light'}>{totalAnswer} Jawaban</span>
            </div>
        </div>
    )
}
