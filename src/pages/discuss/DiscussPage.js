import React from 'react'
import Container from 'components/containers/Container'
import Button from 'components/buttons/Button'
import ForumCard from 'components/cards/forum-card/ForumCard'
import { Link } from 'react-router-dom'

export default function DiscussPage() {
    return (
        <Container className='mt-8' maxWidth='1000px'>
            <div className='d-flex content-between items-center mb-6'>
                <h1 className='medium default-color f-6'>Semua pertanyaan</h1>
                <Link to='/ask-question'>
                    <Button label='Bertanya' padding='1rem 2rem' fontSize='1rem' />
                </Link>
            </div>
            <div className='d-flex content-between items-center'>
                <span className='total-question f-2'>200 pertanyaan</span>
            </div>
            <hr className='bg-grey-color2 my-3' style={{ border: 'none', height: '1px' }} />
            <div className='questions'>
                <ForumCard className='mx-auto' style={{ maxWidth: '800px' }} totalAnswer={2} />
            </div>
        </Container>
    )
}
