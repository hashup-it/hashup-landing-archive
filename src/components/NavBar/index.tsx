import { useState } from 'react'
import { ConnectWallet } from './ConnectWallet'
import { ButtonsMenu, HamburgerButton, Logo, LogoIcon, LogoWrapper, MobileHideWrapper, StyledNavBar } from './index.styles'
import { MainMenu } from './MainMenu'
import { MobileMenu } from './MobileMenu'
import { SelectLanguage } from './SelectLanguage'

export const NavBar = (
    {
        handleMetamaskConnection,
        shownAccount
    }: {
        handleMetamaskConnection: Function,
        shownAccount: string | null
    }
) => {

    const [opened, setOpened] = useState(false);



    return (
        <StyledNavBar>
            <LogoWrapper>
                <LogoIcon src="/assets/icons/LogoIcon.svg"/>
                <Logo src="/assets/icons/HashUp.svg" />
            </LogoWrapper>
            <MobileHideWrapper>
                <MainMenu />
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
                opened={opened}
                onClick={() => setOpened(!opened)}
            />
            {opened && <MobileMenu opened={opened}/>}
        </StyledNavBar>
    )
}
