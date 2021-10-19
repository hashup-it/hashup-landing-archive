import { ConnectWallet } from "./ConnectWallet"
import { ButtonsMenu, Logo, StyledNavBar } from "./index.styles"
import { MainMenu } from "./MainMenu"
import { SelectLanguage } from "./SelectLanguage"

export const NavBar = () => {
    return (
        <StyledNavBar>
            <Logo src="assets/logo.svg"/>
            <MainMenu/>
            <ButtonsMenu>
                <SelectLanguage/>
                <ConnectWallet/>
            </ButtonsMenu>
        </StyledNavBar>
    )
}