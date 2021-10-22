import { useState } from 'react'
import { ConnectWallet } from './ConnectWallet'
import { ButtonsMenu, HamburgerButton, Logo, LogoIcon, LogoWrapper, MobileHideWrapper, StyledNavBar } from './index.styles'
import { MainMenu } from './MainMenu'
import { MobileMenu } from './MobileMenu'
import { SelectLanguage } from './SelectLanguage'
import { Hyperlink } from '../Shared/sections.styles'

export const NavBar = (
    {
        handleMetamaskConnection,
        shownAccount
    }: {
        handleMetamaskConnection: Function,
        shownAccount: string | null
    }
) => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    return (
        <StyledNavBar>
            <LogoWrapper href="/">
                <LogoIcon src="/assets/icons/LogoIcon.svg"/>
                <Logo src="/assets/icons/HashUp.svg" />
            </LogoWrapper>
            <MobileHideWrapper>
                <MainMenu isMobileMenuShown={isMobileMenuShown} />
            </MobileHideWrapper>
            {<ButtonsMenu>
                {false && <SelectLanguage /> }
                {
                    !shownAccount ?
                        <ConnectWallet handleMetamaskConnection={handleMetamaskConnection} /> :
                        `${shownAccount.slice(0, 6)}…${shownAccount.slice(36, 42)}`
                }
            </ButtonsMenu>}
            <HamburgerButton 
                opened={isMobileMenuShown}
                onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
            />
            {isMobileMenuShown && <MobileMenu opened={isMobileMenuShown} setOpened={setIsMobileMenuShown}/>}
        </StyledNavBar>
    )
}
