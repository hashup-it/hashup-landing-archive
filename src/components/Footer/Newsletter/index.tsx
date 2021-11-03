import React, { useState } from "react"
import {
    FormContainer,
    NewsletterContainer,
    StyledFormDescription,
    StyledInput,
    StyledSignUpButton,
} from "./index.styles"
import { ListHeader } from "../index.styles"

export const Newsletter = () => {
    const [mailAddress, setMailAddress] = useState("")

    const signUp = async () => {
        console.log(mailAddress)
    }

    return (
        <NewsletterContainer>
            <ListHeader>Zapisz się do newslettera</ListHeader>
            <StyledFormDescription>
                Otrzymuj aktualności dotyczące naszej działalności.
            </StyledFormDescription>
            <FormContainer>
                <StyledInput
                    type="email"
                    placeholder="Twój adres mejlowy"
                    onChange={event => setMailAddress(event.target.value)}
                />
                <StyledSignUpButton onClick={signUp}>Już niedługo</StyledSignUpButton>
            </FormContainer>
        </NewsletterContainer>
    )
}
