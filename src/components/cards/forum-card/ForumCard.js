import React from 'react';
import Line from 'components/lines/Line';
import Vote from 'components/votes/Vote';
import { Link } from 'react-router-dom';
import styles from './ForumCard.module.css'

export default function ForumCard() {
    return (
        <div className={styles['forum-card']}>
            <h1 className={styles['forum-card-title']}>Bagaimana cara memulai bisnis ?</h1>
            <Line />
            <div className={styles['forum-card-profile']}>
                <Link to="/profile/ihsanaryandi">
                    <img className='img-rounded' src="/images/profile-example.jpg" alt="Profile" style={{ width: '3.2rem', height: '3.2rem' }} />
                </Link>
                <Link className='default-color text-decoration-none f-1 medium ml-2' to='/profile/username-here'>ihsanaryandi</Link>
                <span className='light default-color ml-4'>01-01-2001 14:30</span>
            </div>
            <div className={styles['forum-card-body']}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga mollitia consequatur obcaecati adipisci voluptas sapiente sunt dignissimos porro impedit, corporis error voluptates quia assumenda doloremque eos amet modi ipsum</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga mollitia consequatur obcaecati adipisci voluptas sapiente sunt dignissimos porro impedit, corporis error voluptates quia assumenda doloremque eos amet modi ipsum</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga mollitia consequatur obcaecati adipisci voluptas sapiente sunt dignissimos porro impedit, corporis error voluptates quia assumenda doloremque eos amet modi ipsum</p>
            </div>
            <Line />
            <Vote className='mb-5' onUpVote={set => set(prev => prev + 1)} onDownVote={set => set(prev => prev - 1)} currentTotalVote={1} />
            <div className='main-color1 user-select-none cursor-pointer'>Lihat 12 komentar</div>
        </div>
    )
}
