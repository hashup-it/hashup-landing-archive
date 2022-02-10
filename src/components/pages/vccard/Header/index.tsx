import { Trans, useTranslation } from "react-i18next"
import { GenericHeaderText } from "components/shared/Header/GenericHeaderText"
import VideoHeader from "components/shared/Header/VideoHeader"

import bgImg from "/public/assets/header/cartridge.png"
import Buttons from "./Buttons"

const Header = () => {
    const { t } = useTranslation()

    return (
        <VideoHeader
            video={{ src: "https://cdn.hashup.it/landing/hashup-video.mp4", opacity: 0.28 }}
            img={{ src: bgImg, alt: "test" }}
        >
            <>
                <GenericHeaderText
                    label={<Trans i18nKey="vccard.header.label" />}
                    title={<Trans i18nKey="vccard.header.title" />}
                    paragraph={<Trans i18nKey="vccard.header.paragraph" />}
                    showLabelAccents
                />
                <Buttons />
            </>
        </VideoHeader>
    )
}

export default Header
