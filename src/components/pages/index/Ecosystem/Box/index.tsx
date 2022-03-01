import {
    StyledBoxWrapper,
    StyledHeader,
    StyledContent,
    StyledLink,
    StyledSoonNote,
} from "./index.styles"
import { Trans, useTranslation } from "react-i18next"
import { FC } from "react"
import Image from "next/image"

export interface BoxProps {
    readonly index: number
    readonly isDisabled?: boolean
    readonly link?: {
        readonly href: string
        readonly title: string
    }
    readonly icon: {
        readonly src: string
        readonly alt: string
    }
}

const Box: FC<BoxProps> = ({ index, isDisabled, icon, link }) => {
    const { t } = useTranslation()

    return (
        <StyledBoxWrapper isDisabled={!!isDisabled}>
            <StyledHeader>
                <div className="icon">
                    <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={60}
                        height={60}
                        
                    />
                </div>
                <div className="label">
                    <Trans i18nKey={`home.ecosystem.boxes.${index}.label`} />
                </div>
            </StyledHeader>
            <StyledContent>
                <h3>
                    <Trans i18nKey={`home.ecosystem.boxes.${index}.title`} />
                </h3>
                <p>
                    <Trans i18nKey={`home.ecosystem.boxes.${index}.paragraph`} />
                </p>
            </StyledContent>

            {isDisabled || !link ? (
                <StyledSoonNote>{t(`home.ecosystem.boxes.${index}.link-label`)}</StyledSoonNote>
            ) : (
                <StyledLink
                    label={t("home.ecosystem.testnet-note")}
                    target="_blank"
                    rel="noreferrer"
                    href={link.href}
                    title={link.title}
                >
                    <Trans i18nKey={`home.ecosystem.boxes.${index}.link-label`} />
                </StyledLink>
            )}
        </StyledBoxWrapper>
    )
}

export default Box
