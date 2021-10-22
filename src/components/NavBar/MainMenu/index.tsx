import { FooterTop, MenuItem, StyledMainMenu } from './index.styles'
import { Hyperlink } from '../../Shared/sections.styles'
import {
    AddressLineEmphasized,
    CompanyIds,
    ContactField,
    Copyright,
    FooterBottom,
    FooterBottomGroup,
    FooterLink,
    Icon,
    ListHeader,
    MailLink,
    SocialMediaGroup
} from '../../Footer/index.styles'

export const MainMenu = (
    { isMobileMenuShown }:
        { isMobileMenuShown: boolean }
) => {
    return (
        <StyledMainMenu>
            <MenuItem>
                <Hyperlink href="#ecosystem">
                    Ecosystem
                </Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            {/*<MenuItem>Team</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://www.linkedin.com/company/hashupit">Media</Hyperlink>
            </MenuItem>
            {/*<MenuItem>Investment</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">
                    Docs
                </Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            {
                isMobileMenuShown && <>
                    <SocialMediaGroup>
                        <a href="https://www.facebook.com/HashUpIt"><Icon url={'facebook.svg'} /></a>
                        <a href="https://www.instagram.com/hashup.it/"><Icon url={'instagram.svg'} /></a>
                        <a href="https://www.linkedin.com/company/hashupit"><Icon url={'linkedin.svg'} /></a>
                    </SocialMediaGroup>
                    <FooterTop>
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
                    </FooterTop>
                    <FooterBottom>
                        <FooterBottomGroup>
                            <FooterLink>Terms & Conditions</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                            <FooterLink>Cookies Policy</FooterLink>
                        </FooterBottomGroup>
                        <Copyright>Copyright © by HashUp. All Rights Reserved.</Copyright>
                    </FooterBottom>
                </>
            }
        </StyledMainMenu>
    )
}
