import { Trans, useTranslation } from "react-i18next"
import { GenericHeaderText } from "components/shared/Header/GenericHeaderText"
import Buttons from "./Buttons"
import { StyledContentWrapper, StyledPlayButton, StyledNote } from "./index.styles"
import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl, SocialMediaUrls } from "config"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "./VideoPopup"

const PlayButton = () => {
    const [popupShown, setPopupShown] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <>
            <StyledPlayButton
                title={t("vccard.header.play-button")}
                onClick={() => setPopupShown(true)}
            >
                <div className="icon">
                    <Image
                        src={assetsUrl("vccard/play-button.svg")}
                        width={85}
                        height={85}
                        alt="Play button"
                        priority
                    />
                </div>
                <div className="label">
                    {t("vccard.header.play-button")}
                    <StyledColoredText>.</StyledColoredText>
                </div>
            </StyledPlayButton>
            {popupShown && <VideoPopup close={() => setPopupShown(false)} />}
        </>
    )
}

const HeaderContent = () => (
    <StyledContentWrapper>
        <div className="top-group">
            <GenericHeaderText
                label={<Trans i18nKey="vccard.header.label" />}
                title={<Trans i18nKey="vccard.header.title" />}
                paragraph={<Trans i18nKey="vccard.header.paragraph" />}
                showLabelAccents
            />
            <PlayButton />
        </div>
        <div className="bottom-group">
            <Buttons />
            {/* TODO: ASAP temporary note -> make it better */}
            <StyledNote>
                CEO on Telegram:{" "}
                <a href={SocialMediaUrls.jankowskiTelegram} target="_blank" rel="noreferrer">
                    @SzymonJankowski
                </a>
            </StyledNote>
        </div>
    </StyledContentWrapper>
)

export default HeaderContent
