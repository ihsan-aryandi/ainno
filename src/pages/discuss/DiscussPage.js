import React from 'react'
import Container from 'components/containers/Container'
import Button from 'components/buttons/Button'
import Select from 'components/inputs/select-left-labeled/Select'
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
        <Container className='mt-8' maxWidth='1440px'>
            <div className='d-flex content-between items-center mb-8'>
                <h1 className='medium default-color'>Semua pertanyaan</h1>
                <Link to='/ask-question'>
                    <Button label='Bertanya' padding='1.2rem 2.5rem' fontSize='1.2rem' />
                </Link>
            </div>
            <div className='d-flex content-between items-center'>
                <span className='total-question f-3'>200 pertanyaan</span>
                <Select label='Saring' placeholder='Placeholder' defaultValue='vote' data={data} />
            </div>
        </Container>
    )
}
