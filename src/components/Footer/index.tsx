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
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { assetsUrl, SocialMediaUrls, SocialMediaIcons, BrandAssets } from "config"

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <StyledFooter>
            <FooterSeparatorBase />
            <FooterSeparatorAccent />
            <FooterHeading>
                <Link href="/" passHref>
                    <Logo src={BrandAssets.logo} />
                </Link>
                <SocialMediaGroup>
                    <span>
                        {t("footer.span")}
                        <ColoredText>&nbsp;social media</ColoredText>
                    </span>
                    <a href={SocialMediaUrls.linkedIn}>
                        <Icon url={SocialMediaIcons.linkedin} />
                    </a>
                    <a href={SocialMediaUrls.telegram}>
                        <Icon url={SocialMediaIcons.telegram} />
                    </a>
                    <a href={SocialMediaUrls.twitter}>
                        <Icon url={SocialMediaIcons.twitter} />
                    </a>
                    <a href={SocialMediaUrls.facebook}>
                        <Icon url={SocialMediaIcons.facebook} />
                    </a>
                    <a href={SocialMediaUrls.instagram}>
                        <Icon url={SocialMediaIcons.instagram} />
                    </a>
                </SocialMediaGroup>
            </FooterHeading>
            <FooterQuickNavigation>
                <span>
                    <ColoredText>Hash</ColoredText>Up.it
                </span>
                <AccentLongEmDash />
                <Link href="/">{t("footer.home")}</Link>
            </FooterQuickNavigation>
            <FooterTop>
                <FooterTopLeft>
                    <ListHeader>{t("footer.headquarters")}</ListHeader>
                    <ContactField>
                        <AddressLineEmphasized>HashUp P.S.A.</AddressLineEmphasized>
                        Al. Jana Pawła II 27
                        <br />
                        00-867 {t("footer.warsaw")}
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
                            <MenuHeader>{t("footer.creators")}</MenuHeader>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">
                                    {t("menu.doc")}
                                </Hyperlink>
                            </MenuItem>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/hashup-basics/cartridge">
                                    {t("footer.cartridge")}
                                </Hyperlink>
                            </MenuItem>
                        </MenuList>
                    </MenuItems>
                </FooterMenu>
                <Newsletter />
            </FooterTop>
            <FooterBottom>
                <FooterMetaSeparator />
                <Copyright>Copyright © {CURRENT_YEAR} by HashUp. All Rights Reserved.</Copyright>
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
