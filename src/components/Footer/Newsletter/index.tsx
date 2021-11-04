import React, { useState } from "react"
import {
    FormContainer,
    NewsletterContainer,
    StyledFormDescription,
    StyledInput,
    StyledSignUpButton,
} from "./index.styles"
import { ListHeader } from "../index.styles"
import { useTranslation } from "react-i18next"

export const Newsletter = () => {
    const [mailAddress, setMailAddress] = useState("")

    const signUp = async () => {
        console.log(mailAddress)
    }

    const { t } = useTranslation()

    return (
        <NewsletterContainer>
            <ListHeader>{t("newsletter-header")}</ListHeader>
            <StyledFormDescription>{t("newsletter-description")}</StyledFormDescription>
            <FormContainer>
                <StyledInput
                    type="email"
                    placeholder={t("newsletter-placeholder")}
                    onChange={event => setMailAddress(event.target.value)}
                />
                <StyledSignUpButton onClick={signUp}>
                    {t("newsletter-comingsoon")}
                </StyledSignUpButton>
            </FormContainer>
        </NewsletterContainer>
    )
}
