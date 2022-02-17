import { Trans } from "react-i18next"
import GenericContent from "components/shared/Header/GenericContent"
import Buttons from "./Buttons"
import { StyledNote } from "./index.styles"
import { Materials } from "components/pages/media/data"
import { SocialMediaUrls } from "config"

const HeaderContent = () => (
    <GenericContent
        label={<Trans i18nKey="vccard.header.label" />}
        title={<Trans i18nKey="vccard.header.title" />}
        paragraph={<Trans i18nKey="vccard.header.paragraph" />}
        ytEmbedSrc={Materials.promoVideoEmbedYoutube}
        showLabelAccents
    >
        <>
            <Buttons />
            {/* TODO: ASAP temporary note -> make it better */}
            <StyledNote>
                CEO on Telegram:{" "}
                <a href={SocialMediaUrls.jankowskiTelegram} target="_blank" rel="noreferrer">
                    @SzymonJankowski
                </a>
            </StyledNote>
        </>
    </GenericContent>
)

export default HeaderContent
