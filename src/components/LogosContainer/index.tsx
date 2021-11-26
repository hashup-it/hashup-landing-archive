import { FC } from "react"
import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import {
    StyledContentBox,
    StyledLogosSection,
    StyledLogosSectionHeader,
    StyledLogo,
    StyledLogosContainer,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { LogoInterface } from "./interfaces"

interface LogosContainerProps {
    readonly data: LogoInterface[]
    readonly label: string
    readonly header: JSX.Element
}

const LogosContainer: FC<LogosContainerProps> = ({ data, label, header }) => {
    const { t } = useTranslation()

    return (
        <StyledLogosSection>
            <SectionLabel>{label}</SectionLabel>
            <StyledLogosSectionHeader>{header}</StyledLogosSectionHeader>
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
