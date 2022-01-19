import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ForumCard.module.css'

const ForumCard = () => {
    return (
        <div className={styles['forum-card']}>
            <h1 className={styles['forum-card-title']}>
                <Link className='default-color text-decoration-none' to='/question/10/bagaimana-cara-memulai-bisnis'>Bagaimana cara memulai bisnis ?</Link>
            </h1>
            <div className={styles['forum-card-profile']}>
                <Link to='/profile/username-here'>
                    <img className='img-rounded' src='/images/profile-example.jpg' alt='profile' style={{ width: '3.8rem', height: '3.8rem' }} />
                </Link>
                <Link className='default-color text-decoration-none f-2 medium ml-2' to='/profile/username-here'>ihsanaryandi</Link>
                <small className='light default-color ml-4'>01-01-2001 14:30</small>
            </div>
            <div className={styles['forum-card-body']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
        </div>
    )
}

// ForumCard.Title = () => {
//     return (

//     )
// }

export default ForumCard