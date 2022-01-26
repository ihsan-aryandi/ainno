import React from 'react';
import Container from 'components/containers/Container';
import Button from 'components/buttons/Button';
import ForumCard from 'components/cards/forum-card/ForumCard';
import { Link } from 'react-router-dom';
import Card from 'components/cards/Card';
import TextArea from 'components/textareas/TextArea';
import Form from 'components/forms/Form';
import AnswerCard from 'components/cards/answer-card/AnswerCard';

export default function DetailQuestionsPage() {

    return (
        <Container maxWidth='800px'>
            <Link className='mb-6' to='/ask-question'>
                <Button label='Bertanya' padding='1rem 2rem' fontSize='1rem' />
            </Link>
            <div className='question my-3'>
                <ForumCard />
            </div>
            <div className='answer-input mb-6'>
                <Card className='bg-main-color3 ' maxWidth='900px' withShadow>
                    <Form>
                        <h3 className='regular f-2 mb-3'>Jawaban Anda</h3>
                        <TextArea className='mb-3' />
                        <Button label='Kirim' padding='1rem 4rem' />
                    </Form>
                </Card>
            </div>
            <div className="answer">
                <h2 className='regular mb-3'>5 Jawaban</h2>
                <AnswerCard />
            </div>
        </Container>
    )
}
