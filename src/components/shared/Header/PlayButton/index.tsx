import { FC, useState } from "react"
import {
    StyledPopupBox,
    StyledPopupWrapper,
    StyledPopupVideoWrapper,
    StyledPlayButton,
} from "./index.styles"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { assetsUrl } from "config"
import { StyledColoredText } from "components/shared/utils.styles"

const Popup: FC<{ children: JSX.Element; close: () => void }> = ({ children, close }) => (
    <StyledPopupWrapper>
        <StyledPopupBox>
            <button className="x-button" title="Close" onClick={close}>
                X
            </button>
            {children}
        </StyledPopupBox>
    </StyledPopupWrapper>
)

const VideoPopup: FC<{ close: () => void; ytEmbedSrc: string }> = ({ close, ytEmbedSrc }) => (
    <Popup close={close}>
        <StyledPopupVideoWrapper>
            <iframe
                width="560"
                height="315"
                src={`${ytEmbedSrc}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </StyledPopupVideoWrapper>
    </Popup>
)

interface PlayButtonProps {
    readonly ytEmbedSrc: string
}

const PlayButton: FC<PlayButtonProps> = ({ ytEmbedSrc }) => {
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
                        src={assetsUrl("random-icons/play-button.svg")}
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
            {popupShown && (
                <VideoPopup close={() => setPopupShown(false)} ytEmbedSrc={ytEmbedSrc} />
            )}
        </>
    )
}

export default PlayButton
