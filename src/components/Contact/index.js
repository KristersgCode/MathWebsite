import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap} from './ContactElements'

const Contact = () => {
    return (
        <>
            <Container id="contact">
                <FormWrap>
                    
                    <FormContent>
                        <Form  action='#'>
                            <FormH1>Contact me</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type='submit' onClick={() => alert('This form is only for visual purpose')}>Continue</FormButton>
                           
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact