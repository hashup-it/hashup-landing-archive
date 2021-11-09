import { AccentLongEmDash, ColoredText } from "../Shared"
import {
    AddressLineEmphasized,
    CompanyIds,
    ContactField,
    Copyright,
    FooterBottom,
    FooterBottomGroup,
    FooterHeading,
    FooterLink,
    FooterMenu,
    FooterMetaSeparator,
    FooterQuickNavigation,
    FooterSeparatorAccent,
    FooterSeparatorBase,
    FooterTop,
    FooterTopLeft,
    Icon,
    ListHeader,
    Logo,
    MailLink,
    MenuHeader,
    MenuItem,
    MenuItems,
    MenuList,
    SocialMediaGroup,
    StyledFooter,
} from "./index.styles"
import { Newsletter } from "./Newsletter"
import { Hyperlink } from "../Shared/sections.styles"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <StyledFooter>
            <FooterSeparatorBase />
            <FooterSeparatorAccent />
            <FooterHeading>
                <NavLink to="/">
                    <Logo src="/assets/logo.svg" />
                </NavLink>
                <SocialMediaGroup>
                    <span>
                        {t("footer-span")}
                        <ColoredText>&nbsp;social media</ColoredText>
                    </span>
                    <a href="https://www.linkedin.com/company/hashupit">
                        <Icon url={"linkedin.svg"} />
                    </a>
                    <a href="https://t.me/HashUpAnnouncements">
                        <Icon url={"telegram.svg"} />
                    </a>
                    <a href="https://twitter.com/HashUp_it">
                        <Icon url={"twitter.svg"} />
                    </a>
                    <a href="https://www.facebook.com/HashUpIt">
                        <Icon url={"facebook.svg"} />
                    </a>
                    <a href="https://www.instagram.com/hashup.it/">
                        <Icon url={"instagram.svg"} />
                    </a>
                </SocialMediaGroup>
            </FooterHeading>
            <FooterQuickNavigation>
                <NavLink to="/">
                    <span>
                        <ColoredText>Hash</ColoredText>Up.it
                    </span>
                    <AccentLongEmDash />
                    {t("footer-home")}
                </NavLink>
            </FooterQuickNavigation>
            <FooterTop>
                <FooterTopLeft>
                    <ListHeader>{t("footer-headquarters")}</ListHeader>
                    <ContactField>
                        <AddressLineEmphasized>HashUp P.S.A.</AddressLineEmphasized>
                        Al. Jana Pawła II 27
                        <br />
                        00-867 {t("footer-warsaw")}
                        <br />
                        <br />
                        <MailLink href="mailto:hello@hashup.it">hello@hashup.it</MailLink>
                        <br />
                    </ContactField>
                    <CompanyIds>
                        NIP: 5272974670
                        <br />
                        KRS: 0000927509
                        <br />
                    </CompanyIds>
                </FooterTopLeft>
                <FooterMenu>
                    <MenuItems>
                        {/*<MenuList>*/}
                        {/*    <MenuHeader>HashUp</MenuHeader>*/}
                        {/*    <MenuItem>Team</MenuItem>*/}
                        {/*    <MenuItem>Media o nas</MenuItem>*/}
                        {/*    <MenuItem>Praca w #</MenuItem>*/}
                        {/*</MenuList>*/}
                        {/*<MenuList>*/}
                        {/*    <MenuHeader>Pomoc</MenuHeader>*/}
                        {/*    <MenuItem>FAQ</MenuItem>*/}
                        {/*    <MenuItem>Help center</MenuItem>*/}
                        {/*    <MenuItem>Support</MenuItem>*/}
                        {/*</MenuList>*/}
                        <MenuList>
                            <MenuHeader>{t("footer-creators")}</MenuHeader>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">
                                    {t("doc")}
                                </Hyperlink>
                            </MenuItem>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/hashup-basics/cartridge">
                                    {t("footer-cartridge")}
                                </Hyperlink>
                            </MenuItem>
                        </MenuList>
                    </MenuItems>
                </FooterMenu>
                <Newsletter />
            </FooterTop>
            <FooterBottom>
                <FooterMetaSeparator />
                <Copyright>Copyright © {new Date().getFullYear()} by HashUp. All Rights Reserved.</Copyright>
                <FooterBottomGroup>
                    <FooterLink>
                        <Hyperlink href="/documents/Hash_Token_Terms_of_Use.pdf">
                            Terms & Conditions
                        </Hyperlink>
                    </FooterLink>
                    <FooterLink>
                        <Hyperlink href="/documents/Data_Protection_Policy.pdf">
                            Privacy Policy
                        </Hyperlink>
                    </FooterLink>
                    <FooterLink>
                        <Hyperlink href="/documents/Hash_Token_Airdrop_Terms_and_Conditions.pdf">
                            Airdrop Terms of Use
                        </Hyperlink>
                    </FooterLink>
                </FooterBottomGroup>
            </FooterBottom>
        </StyledFooter>
    )
}

export default Footer
