import { MenuItem, StyledMainMenu } from "./index.styles"
import { Hyperlink } from "../../Shared/sections.styles"
import { StyledFooterTop } from "../../Footer/index.styles"
import { SelectLanguage } from "../SelectLanguage"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { SocialMediaUrls } from "config"
import FooterMenu from "components/Footer/FooterMenu"
import CompanyInfo from "components/Footer/CompanyInfo"
import SocialMediaBox from "components/Footer/SocialMediaBox"
import FooterBottom from "components/Footer/FooterBottom"

export const MainMenu = ({
    isMobileMenuShown,
    setIsMobileMenuShown,
}: {
    isMobileMenuShown: boolean
    setIsMobileMenuShown?: Function
}) => {
    const { t } = useTranslation()

    const handleCloseAction = () => {
        setIsMobileMenuShown ? setIsMobileMenuShown(false) : new Function()
    }

    return (
        <StyledMainMenu>
            <MenuItem>
                <Link href="/#ecosystem" passHref>
                    <Hyperlink onClick={handleCloseAction}>{t("menu.ecosystem")}</Hyperlink>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/cartridges" passHref>
                    <Hyperlink onClick={handleCloseAction}>{t("menu.cartridges")}</Hyperlink>
                </Link>
            </MenuItem>
            <MenuItem>
                <Hyperlink href={SocialMediaUrls.linkedIn}>{t("menu.media")}</Hyperlink>
            </MenuItem>
            <MenuItem>
                <Hyperlink href={SocialMediaUrls.gitbook}>{t("menu.doc")}</Hyperlink>
            </MenuItem>
            <SelectLanguage />
            {isMobileMenuShown && (
                <>
                    <SocialMediaBox />
                    <StyledFooterTop>
                        <CompanyInfo />
                        <FooterMenu />
                    </StyledFooterTop>
                    <FooterBottom />
                </>
            )}
        </StyledMainMenu>
    )
}
