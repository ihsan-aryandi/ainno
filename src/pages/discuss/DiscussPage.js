import React from 'react'
import Container from 'components/containers/Container'
import Button from 'components/buttons/Button'
import Select from 'components/inputs/select-left-labeled/Select'
import ForumCard from 'components/cards/forum-card/ForumCard'
import { Link } from 'react-router-dom'

export default function DiscussPage() {
    const data = [
        {
            label: 'label 1',
            value: 'value1'
        },
        {
            label: 'label 2',
            value: 'value2'
        },
        {
            label: 'label 3',
            value: 'value3'
        },
        {
            label: 'label 3',
            value: 'value3'
        }
    ]
    return (
        <Container className='mt-8' maxWidth='1080px'>
            <div className='d-flex content-between items-center mb-8'>
                <h1 className='medium default-color'>Semua pertanyaan</h1>
                <Link to='/ask-question'>
                    <Button label='Bertanya' padding='1.2rem 2.5rem' fontSize='1.2rem' />
                </Link>
            </div>
            <div className='d-flex content-between items-center'>
                <span className='total-question f-3'>200 pertanyaan</span>
                <div className='d-flex items-center'>
                    <Select className='mr-4' label='Saring' defaultValue='vote' data={data} />
                    <Select label='Urut' defaultValue='vote' data={data} />
                </div>
            </div>
            <hr className='bg-grey-color2 my-3' style={{ border: 'none', height: '1px' }} />
            <div className='questions'>
                <ForumCard />
            </div>
        </Container>
    )
}
