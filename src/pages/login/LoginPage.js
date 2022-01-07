import React from 'react'
import Input from 'components/input/Input'
import Card from 'components/cards/Card'
import Form from 'components/forms/Form'
import Button from 'components/buttons/Button'

export default function LoginPage() {
    return (
        <div className="full-screen bg-grey-color1 center flex-column">
            <img src="/images/ainno-logo.png" alt="Ainno Logo" />
            <h1>Masuk ke Ainno</h1>
            <Card className="bg-main-color3" maxWidth="400px">
                <Form>
                    <Input label="Username" className="mb-3" autoFocus />
                    <Input label="Password" className="mb-4" type="password" />
                    <Button label={"Masuk"} />
                </Form>
            </Card>
        </div>
    )
}
