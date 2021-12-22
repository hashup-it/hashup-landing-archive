import { FC } from "react"
import {
    StyledContentBox,
    StyledLogosSection,
    StyledLogo,
    StyledLogosContainer,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { LogoInterface } from "./interfaces"
import { StyledSmallSectionLabel, StyledSmallSectionTitle } from "components/shared/section.styles"

interface LogosContainerProps {
    readonly data: LogoInterface[]
    readonly label: string
    readonly header: JSX.Element
}

const LogosContainer: FC<LogosContainerProps> = ({ data, label, header }) => {
    const { t } = useTranslation()

    return (
        <StyledLogosSection>
            <StyledSmallSectionLabel>{label}</StyledSmallSectionLabel>
            <StyledSmallSectionTitle>{header}</StyledSmallSectionTitle>
            <StyledContentBox>
                <StyledLogosContainer>
                    {data.map((item, index) => (
                        <StyledLogo key={index} src={item.logoPath} alt={item.logoAlt} />
                    ))}
                </StyledLogosContainer>
            </StyledContentBox>
        </StyledLogosSection>
    )
}

export default LogosContainer
