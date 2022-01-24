import React from 'react';
import Container from 'components/containers/Container';
import Button from 'components/buttons/Button';
import ForumCard from 'components/cards/forum-card/ForumCard';
import { Link } from 'react-router-dom';

export default function DetailQuestionsPage() {
    return (
        <Container maxWidth='800px'>
            <Link className='mb-6' to='/ask-question'>
                <Button label='Bertanya' padding='1rem 2rem' fontSize='1rem' />
            </Link>
            <div className='question mt-3'>
                <ForumCard />
            </div>
            <div className='answer-input'>

            </div>
        </Container>
    )
}
