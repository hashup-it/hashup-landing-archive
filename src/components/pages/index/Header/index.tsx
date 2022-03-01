import BottomNav from "components/shared/Header/BottomNav"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import ImgBackground from "components/shared/Header/ImgBackground"
import VideoBackground from "components/shared/Header/VideoBackground"
import { Trans } from "react-i18next"
import GenericContent from "components/shared/Header/GenericContent"
import { Materials } from "components/pages/media/data"
import Buttons from "./Buttons"

import bgImg from "/public/assets/2d-cartridges/placeholder.png"

const Header = () => (
    <FullScreenHeader
        desktopBackground={
            <VideoBackground src="https://cdn.hashup.it/landing/Hashup_web_v2.mp4" opacity={0.4} />
        }
        mobileBackground={<ImgBackground src={bgImg} alt="HashUp Cartridge" />}
        extraContent={<BottomNav />}
    >
        <GenericContent
            label={<Trans i18nKey="home.header.label" />}
            title={<Trans i18nKey="home.header.title" />}
            paragraph={<Trans i18nKey="home.header.paragraph" />}
            ytEmbedSrc={Materials.promoVideoEmbedYoutube}
            showLabelAccents
        >
            <Buttons />
        </GenericContent>
    </FullScreenHeader>
)

export default Header
