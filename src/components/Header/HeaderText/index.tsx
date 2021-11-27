import { ButtonOutlined, ColoredText } from "../../Shared"
import { Hyperlink } from "../../Shared/sections.styles"
import {
    StyledButtonsBox,
    GradientText,
    HeaderAirdropIcon,
    HeaderAirdropWrapper,
    HeaderGetAirdrop,
    StyledLandingHeaderText,
    StyledParagraph,
    StyledForm,
    StyledNewsletterBox,
    StyledTitle,
} from "./index.styles"
import { useTranslation } from "react-i18next"

export const HeaderText = () => {
    const { t } = useTranslation()

    return (
        <StyledLandingHeaderText>
            <StyledTitle>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </StyledTitle>
            <StyledParagraph>{t("header.description")}</StyledParagraph>
            <StyledButtonsBox>
                <ButtonOutlined href="/documents/Whitepaper.pdf">Whitepaper</ButtonOutlined>
                <Hyperlink href="/#airdrop">
                    <HeaderAirdropWrapper>
                        <HeaderAirdropIcon />
                        <HeaderGetAirdrop>{t("header.airdrop")}</HeaderGetAirdrop>
                    </HeaderAirdropWrapper>
                </Hyperlink>
            </StyledButtonsBox>
            <StyledNewsletterBox>
                <span className="title">{t("header.ico-signup")}</span>
                <StyledForm>
                    <div
                        className="ml-form-embed"
                        data-account="3556595:b7a5n7e8w5"
                        data-form="5061527:j8h9l1"
                    ></div>
                </StyledForm>
            </StyledNewsletterBox>
        </StyledLandingHeaderText>
    )
}
