import { FC } from "react"
import { DownloadButton, StyledDownloadButton, StyledTitle } from "../shared"
import {
    StyledLeadershipWrapper,
    StyledLeaderSection,
    StyledImgBox,
    StyledTextBox,
} from "./index.styles"
import Image from "next/image"
import { Materials } from "../data"
import { Trans, useTranslation } from "react-i18next"

const jankowskiImg = require("/public/assets/media/szymon-jankowski.png")
const szydlowskiImg = require("/public/assets/media/filip-szydlowski.png")

const LeaderSection: FC<{
    role: string
    name: string
    textLocaleKey: string
    avatarImg: string
    fullImg: string
    reversedLayout?: boolean
}> = ({ role, name, textLocaleKey, avatarImg, fullImg, reversedLayout }) => {
    const { t } = useTranslation()

    return (
        <StyledLeaderSection reversedLayout={reversedLayout}>
            <StyledImgBox>
                <div className="img-wrapper">
                    <Image src={avatarImg} alt={`${name}`} />
                </div>
                <DownloadButton
                    label={t("media.leadership.photo-download-button")}
                    href={fullImg}
                />
            </StyledImgBox>
            <StyledTextBox reversedLayout={reversedLayout}>
                <div className="header">
                    <div className="role">{role}</div>
                    <div className="name">{name}</div>
                </div>
                <p className="text">
                    <Trans i18nKey={textLocaleKey} />{" "}
                </p>
            </StyledTextBox>
        </StyledLeaderSection>
    )
}

const Leadership = () => {
    const { t } = useTranslation()

    return (
        <StyledLeadershipWrapper>
            <StyledTitle>{t("media.leadership.section-title")}</StyledTitle>
            <LeaderSection
                role="CEO"
                name="Szymon Jankowski"
                textLocaleKey="media.leadership.people.jankowski"
                fullImg={Materials.jankowskiPhoto}
                avatarImg={jankowskiImg}
            />
            <LeaderSection
                role="COO/CLO"
                name="Filip Szydłowski"
                textLocaleKey="media.leadership.people.szydlowski"
                fullImg={Materials.szydlowskiPhoto}
                avatarImg={szydlowskiImg}
                reversedLayout
            />
        </StyledLeadershipWrapper>
    )
}

export default Leadership
