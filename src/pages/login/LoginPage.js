import React from 'react'
import styles from './LoginPage.module.css'
import Input from 'components/inputs/regular-input/Input'
import Card from 'components/cards/Card'
import Form from 'components/forms/Form'
import Button from 'components/buttons/Button'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className="full-screen px-8 bg-grey-color1 d-flex items-center flex-column">
            <img className={`${styles.logo} mb-5`} src="/images/ainno-logo.png" alt="Ainno Logo" />
            <h1 className="regular mb-6">Masuk ke Ainno</h1>
            <Card className="bg-main-color3 px-5" maxWidth="400px">
                <Form>
                    <Input label="Username" className="mb-3" autoFocus />
                    <Input label="Password" className="mb-4" type="password" />
                    <Button label="Masuk" className="mb-4" full />
                    <p className='grey-color3' style={{fontSize: '.9rem'}}>Belum memiliki akun ? <Link className="link" to="/register">Buat akun</Link></p>
                </Form>
            </Card>
        </div>
    )
}
