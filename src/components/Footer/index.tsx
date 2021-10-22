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
import { Hyperlink } from '../Shared/sections.styles'

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterSeparatorBase />
            <FooterSeparatorAccent />
            <FooterHeading>
                <Logo src="/assets/logo.svg" />
                <SocialMediaGroup>
                    <span>Our&nbsp;<ColoredText>social media</ColoredText></span>
                    <a href="https://www.facebook.com/HashUpIt"><Icon url={'facebook.svg'} /></a>
                    <a href="https://www.instagram.com/hashup.it/"><Icon url={'instagram.svg'} /></a>
                    <a href="https://www.linkedin.com/company/hashupit"><Icon url={'linkedin.svg'} /></a>
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
                            HashUp P.S.A.
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
                            <MenuHeader>Dla Twórców</MenuHeader>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">
                                    Dokumentacja
                                </Hyperlink>
                            </MenuItem>
                            <MenuItem>
                                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/hashup-basics/cartridge">
                                    Czym jest kartridż?
                                </Hyperlink>
                            </MenuItem>
                        </MenuList>
                    </MenuItems>
                </FooterMenu>
                <Newsletter />
            </FooterTop>
            <FooterBottom>
                <Copyright>Copyright © by HashUp. All Rights Reserved.</Copyright>
                <FooterBottomGroup>
                    <FooterLink>
                        <Hyperlink href="/documents/Hash_Token_Airdrop_Terms_and_Conditions.pdf">
                            Terms & Conditions
                        </Hyperlink>
                    </FooterLink>
                    <FooterLink>
                        <Hyperlink href="/documents/Data_Protection_Policy.pdf">
                            Privacy Policy
                        </Hyperlink>
                    </FooterLink>
                    <FooterLink>
                        <Hyperlink href="/documents/Hash_Token_Terms_of_Use.pdf">
                            Terms of Use
                        </Hyperlink>
                    </FooterLink>
                </FooterBottomGroup>
            </FooterBottom>
        </StyledFooter>
    )
}
