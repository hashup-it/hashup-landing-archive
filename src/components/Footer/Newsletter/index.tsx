import React, { useState } from "react"
import {
    FormContainer,
    NewsletterContainer,
    StyledFormDescription,
    StyledInputContainer,
} from "./index.styles"
import { ListHeader } from "../index.styles"
import { useTranslation } from "react-i18next"

export const Newsletter = () => {
    const { t } = useTranslation()

    return (
        <NewsletterContainer>
            <ListHeader>{t("newsletter.header")}</ListHeader>
            <StyledFormDescription>{t("newsletter.description")}</StyledFormDescription>
            <FormContainer>
                <StyledInputContainer>
                    <div
                        className="ml-form-embed"
                        data-account="3556595:b7a5n7e8w5"
                        data-form="4955744:x2o8o0"
                    />
                </StyledInputContainer>
            </FormContainer>
        </NewsletterContainer>
    )
}
