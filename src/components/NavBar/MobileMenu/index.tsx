import { FunctionComponent } from 'react'
import { MainMenu } from '../MainMenu'
import { StyledMobileMenu } from './index.styles'

export const MobileMenu: FunctionComponent<{ opened: boolean, setOpened: Function }> = (
    {
        opened,
        setOpened
    }
) => {
    return (
        <StyledMobileMenu
            opened={opened}
            onClick={() => setOpened(false)}
        >
            <MainMenu isMobileMenuShown={opened} />
        </StyledMobileMenu>
    )
}
