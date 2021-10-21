import React, { useState } from 'react'
import {
    FormContainer,
    NewsletterContainer,
    StyledFormDescription,
    StyledInput,
    StyledSignUpButton
} from './index.styles'
import { ListHeader } from '../index.styles'

export const Newsletter = () => {
    const [mailAddress, setMailAddress] = useState('')

    const signUp = async () => {
        console.log(mailAddress)
    }

    return (
        <NewsletterContainer>
            <ListHeader>Subscribe to the newsletter</ListHeader>
            <StyledFormDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </StyledFormDescription>
            <FormContainer>
                <StyledInput
                    type="email"
                    placeholder="Your email address"
                    onChange={event => setMailAddress(event.target.value)}
                />
                <StyledSignUpButton onClick={signUp}>Sign up</StyledSignUpButton>
            </FormContainer>
        </NewsletterContainer>
    )
}
