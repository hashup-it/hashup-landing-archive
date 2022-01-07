import { MenuItem, StyledMainMenu } from "./index.styles"
import { StyledFooterTop } from "../../Footer/index.styles"
import { SelectLanguage } from "../SelectLanguage"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { SocialMediaUrls } from "config"
import FooterMenu from "components/global/Footer/FooterMenu"
import CompanyInfo from "components/global/Footer/CompanyInfo"
import SocialMediaBox from "components/global/Footer/SocialMediaBox"
import FooterBottom from "components/global/Footer/FooterBottom"

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
                    <a onClick={handleCloseAction}>{t("menu.ecosystem")}</a>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/cartridges" passHref>
                    <a onClick={handleCloseAction}>{t("menu.cartridges")}</a>
                </Link>
            </MenuItem>
            <MenuItem>
                <a href={SocialMediaUrls.linkedIn}>{t("menu.media")}</a>
            </MenuItem>
            <MenuItem>
                <a href={SocialMediaUrls.gitbook}>{t("menu.doc")}</a>
            </MenuItem>
            {/* <SelectLanguage /> */}
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
