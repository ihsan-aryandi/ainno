import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from 'components/icons/ArrowIcon'
import styles from './ForumCard.module.css'
import appendClass from 'utils/class'

const ForumCard = ({ 
    className = '', 
    style = {},
    totalAnswer = 0 
}) => {

    return (
        <div className={appendClass(styles['forum-card'], className)} style={style}>
            <h1 className={styles['forum-card-title']}>
                <Link className='default-color text-decoration-none' to='/question/10/bagaimana-cara-memulai-bisnis'>Bagaimana cara memulai bisnis ?</Link>
            </h1>
            <div className={styles['forum-card-profile']}>
                <Link to='/profile/username-here'>
                    <img className='img-rounded' src='/images/profile-example.jpg' alt='profile' style={{ width: '3.2rem', height: '3.2rem' }} />
                </Link>
                <Link className='default-color text-decoration-none f-1 medium ml-2' to='/profile/username-here'>ihsanaryandi</Link>
                <span className='light default-color ml-4'>01-01-2001 14:30</span>
                {/* <small className='light default-color ml-4 f-1'></small> */}
            </div>
            <div className={styles['forum-card-body']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            <div className={styles['forum-card-footer']}>
                <div className={styles['vote-container']}>
                    <ArrowIcon className={appendClass(styles.vote, styles['up-vote'])} width='1.3rem' height='1.3rem' />
                    <div className='default-color mx-4'>15</div>
                    <ArrowIcon className={styles.vote} width='1.3rem' height='1.3rem' />
                </div>
                <span className={totalAnswer > 0 ? 'main-color1' : 'grey-color3 light'}>{totalAnswer} Jawaban</span>
            </div>
        </div>
    )
}

// ForumCard.Title = () => {
//     return (

//     )
// }

export default ForumCard