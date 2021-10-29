import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ConnectWallet } from './ConnectWallet'
import {
    ButtonsMenu,
    HamburgerButton,
    Logo,
    LogoIcon,
    LogoWrapper,
    MenuWrapper,
    MobileHideWrapper,
    StyledNavBar
} from './index.styles'
import { MainMenu } from './MainMenu'
import { MobileMenu } from './MobileMenu'
import { SelectLanguage } from './SelectLanguage'

export const NavBar = (
    {
        handleMetamaskConnection,
        shownAccount,
        isWalletSelectorShown,
        setIsWalletSelectorShown
    }: {
        handleMetamaskConnection: Function,
        shownAccount: string | null,
        isWalletSelectorShown: boolean,
        setIsWalletSelectorShown: Function
    }
) => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

    return (
        <StyledNavBar>
            <MenuWrapper>
                <NavLink to="/">
                    <LogoWrapper>
                        <LogoIcon src="/assets/icons/LogoIcon.svg" />
                        <Logo src="/assets/icons/HashUp.svg" />
                    </LogoWrapper>
                </NavLink>
                <MobileHideWrapper>
                    <MainMenu isMobileMenuShown={isMobileMenuShown} />
                </MobileHideWrapper>
                {<ButtonsMenu>
                    {false && <SelectLanguage />}
                    <ConnectWallet
                        account={shownAccount}
                        handleMetamaskConnection={handleMetamaskConnection}
                        isWalletSelectorShown={isWalletSelectorShown}
                        setIsWalletSelectorShown={setIsWalletSelectorShown}
                    />
                </ButtonsMenu>}
                <HamburgerButton
                    opened={isMobileMenuShown}
                    onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                />
                {isMobileMenuShown && <MobileMenu opened={isMobileMenuShown} setOpened={setIsMobileMenuShown} />}
            </MenuWrapper>
        </StyledNavBar>
    )
}
