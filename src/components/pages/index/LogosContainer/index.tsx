import { FC } from "react"
import {
    StyledContentBox,
    StyledLogosSection,
    StyledLogosContainer,
    StyledLogoWrapper,
} from "./index.styles"
import { LogoInterface } from "./interfaces"
import { StyledSmallSectionLabel, StyledSmallSectionTitle } from "components/shared/section.styles"
import Image from "next/image"

interface LogosContainerProps {
    readonly data: LogoInterface[]
    readonly label: string
    readonly header: JSX.Element
}

const LogosContainer: FC<LogosContainerProps> = ({ data, label, header }) => (
    <StyledLogosSection>
        <StyledSmallSectionLabel>{label}</StyledSmallSectionLabel>
        <StyledSmallSectionTitle>{header}</StyledSmallSectionTitle>
        <StyledContentBox>
            <StyledLogosContainer>
                {data.map((item, index) => (
                    <StyledLogoWrapper key={index}>
                        <Image
                            src={item.logoPath}
                            alt={item.logoAlt}
                            quality={50}
                            sizes={`240px`}
                            objectFit="scale-down"
                            placeholder="blur"
                        />
                    </StyledLogoWrapper>
                ))}
            </StyledLogosContainer>
        </StyledContentBox>
    </StyledLogosSection>
)

export default LogosContainer
