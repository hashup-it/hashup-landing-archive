import { ConnectWallet } from './ConnectWallet'
import { ButtonsMenu, Logo, StyledNavBar } from './index.styles'
import { MainMenu } from './MainMenu'
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
    return (
        <StyledNavBar>
            <Logo src="assets/logo.svg" />
            <MainMenu />
            <ButtonsMenu>
                <SelectLanguage />
                {
                    !shownAccount ?
                        <ConnectWallet handleMetamaskConnection={handleMetamaskConnection} /> :
                        `${shownAccount.slice(0, 6)}…${shownAccount.slice(36, 42)}`
                }
            </ButtonsMenu>
        </StyledNavBar>
    )
}
