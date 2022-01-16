import React from 'react'
import Container from 'components/containers/Container'
import Button from 'components/buttons/Button'
import { Link } from 'react-router-dom'

export default function DiscussPage() {
    return (
        <Container className='mt-8' maxWidth='1440px'>
            <div className='d-flex content-between items-center'>
                <h1 className='medium default-color'>Semua pertanyaan</h1>
                <Link to='/ask-question'>
                    <Button label='Bertanya' padding='1.2rem 2.5rem' fontSize='1.2rem' />
                </Link>
            </div>
        </Container>
    )
}
