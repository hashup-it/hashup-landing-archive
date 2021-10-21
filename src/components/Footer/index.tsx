import { AccentLongEmDash, ColoredText } from '../Shared'
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
    StyledFooter
} from './index.styles'
import { Newsletter } from './Newsletter'

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterSeparatorBase />
            <FooterSeparatorAccent />
            <FooterHeading>
                <Logo src="/assets/logo.svg" />
                <SocialMediaGroup>
                    <span>Our&nbsp;<ColoredText>social media</ColoredText></span>
                    <Icon url={'facebook.svg'} />
                    <Icon url={'instagram.svg'} />
                    <Icon url={'linkedin.svg'} />
                </SocialMediaGroup>
            </FooterHeading>
            <FooterQuickNavigation>
                <p><ColoredText>Hash</ColoredText>Up.it</p>
                <AccentLongEmDash />
                <a href="#">Idź do strony głównej</a>
            </FooterQuickNavigation>
            <FooterTop>
                <FooterTopLeft>
                    <ListHeader>Nasza siedziba</ListHeader>
                    <ContactField>
                        <AddressLineEmphasized>
                            HashUp P.S.A
                        </AddressLineEmphasized>
                        Al. Jana Pawła II 27<br />
                        00-867 Warszawa<br />
                        <br />
                        <MailLink href="mailto:hello@hashup.it">
                            hello@hashup.it
                        </MailLink>
                        <br />
                    </ContactField>
                    <CompanyIds>
                        NIP: 5272974670<br />
                        KRS: 0000927509<br />
                    </CompanyIds>
                </FooterTopLeft>
                <FooterMenu>
                    <MenuItems>
                        <MenuList>
                            <MenuHeader>HashUp</MenuHeader>
                            <MenuItem>Team</MenuItem>
                            <MenuItem>Media o nas</MenuItem>
                            <MenuItem>Praca w #</MenuItem>
                        </MenuList>
                        <MenuList>
                            <MenuHeader>Support</MenuHeader>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>Help center</MenuItem>
                            <MenuItem>Support</MenuItem>
                        </MenuList>
                        <MenuList>
                            <MenuHeader>For Creators</MenuHeader>
                            <MenuItem>Abc</MenuItem>
                            <MenuItem>Bcd</MenuItem>
                            <MenuItem>Cde</MenuItem>
                        </MenuList>
                    </MenuItems>
                </FooterMenu>
                <Newsletter />
            </FooterTop>
            <FooterBottom>
                <Copyright>Copyright © by HashUp. All Rights Reserved.</Copyright>
                <FooterBottomGroup>
                    <FooterLink>Terms & Conditions</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>Cookies Policy</FooterLink>
                </FooterBottomGroup>
            </FooterBottom>
        </StyledFooter>
    )
}
