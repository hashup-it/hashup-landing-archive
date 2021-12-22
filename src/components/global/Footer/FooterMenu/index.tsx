import { useTranslation } from "react-i18next"
import { StyledMenuHeader } from "../index.styles"
import { StyledFooterMenu, StyledMenuItem, StyledMenuItems, StyledMenuList } from "./index.styles"

const FooterMenu = () => {
    const { t } = useTranslation()

    return (
        <StyledFooterMenu>
            <StyledMenuItems>
                {/*<StyledMenuList>*/}
                {/*    <StyledMenuHeader>HashUp</StyledMenuHeader>*/}
                {/*    <StyledMenuItem>Team</StyledMenuItem>*/}
                {/*    <StyledMenuItem>Media o nas</StyledMenuItem>*/}
                {/*    <StyledMenuItem>Praca w #</StyledMenuItem>*/}
                {/*</StyledMenuList>*/}
                {/*<StyledMenuList>*/}
                {/*    <StyledMenuHeader>Pomoc</StyledMenuHeader>*/}
                {/*    <StyledMenuItem>FAQ</StyledMenuItem>*/}
                {/*    <StyledMenuItem>Help center</StyledMenuItem>*/}
                {/*    <StyledMenuItem>Support</StyledMenuItem>*/}
                {/*</StyledMenuList>*/}
                <StyledMenuList>
                    <StyledMenuHeader>{t("footer.creators")}</StyledMenuHeader>
                    <StyledMenuItem href="https://hashup-it.gitbook.io/hashup-it-1/">
                        {t("menu.doc")}
                    </StyledMenuItem>
                    <StyledMenuItem href="https://hashup-it.gitbook.io/hashup-it-1/hashup-basics/cartridge">
                        {t("footer.cartridge")}
                    </StyledMenuItem>
                </StyledMenuList>
            </StyledMenuItems>
        </StyledFooterMenu>
    )
}

export default FooterMenu
