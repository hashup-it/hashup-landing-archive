import { FC } from "react"
import { DownloadButton, StyledTitle } from "../shared"
import { StyledLeadershipWrapper, StyledLeaderBox, StyledTextBox } from "./index.styles"
import Image from "next/image"
import { Materials } from "../data"
import { Trans, useTranslation } from "react-i18next"

const jankowskiImg = require("/public/assets/media/szymon-jankowski.png")
const szydlowskiImg = require("/public/assets/media/filip-szydlowski.png")

const LeaderBox: FC<{
    role: string
    name: string
    textLocaleKey: string
    avatarImg: string
    fullImg: string
}> = ({ role, name, textLocaleKey, avatarImg, fullImg }) => {
    const { t } = useTranslation()

    return (
        <StyledLeaderBox>
            <div className="img-wrapper">
                <Image
                    src={avatarImg}
                    alt={`${name}`}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="400px"
                    sizes="350px"
                />
            </div>
            <StyledTextBox>
                <div className="header">
                    <div className="role">{role}</div>
                    <div className="name">{name}</div>
                </div>
                <p className="text">
                    <Trans i18nKey={textLocaleKey} />{" "}
                </p>
                {/* <div className="button-wrapper">
                    <DownloadButton
                        label={t("media.leadership.photo-download-button")}
                        href={fullImg}
                    />
                </div> */}
            </StyledTextBox>
        </StyledLeaderBox>
    )
}

const Leadership = () => {
    const { t } = useTranslation()

    return (
        <StyledLeadershipWrapper>
            <StyledTitle>{t("media.leadership.section-title")}</StyledTitle>
            <div className="content">
                <LeaderBox
                    role="CEO"
                    name="Szymon Jankowski"
                    textLocaleKey="media.leadership.people.jankowski"
                    fullImg={Materials.jankowskiPhoto}
                    avatarImg={jankowskiImg}
                />
                <LeaderBox
                    role="COO/CLO"
                    name="Filip Szydłowski"
                    textLocaleKey="media.leadership.people.szydlowski"
                    fullImg={Materials.szydlowskiPhoto}
                    avatarImg={szydlowskiImg}
                />
            </div>
        </StyledLeadershipWrapper>
    )
}

export default Leadership
