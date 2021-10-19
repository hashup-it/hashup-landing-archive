import { Icon } from "../index.styles"
import { MenuItem, StyledMainMenu } from "./index.styles"

export const MainMenu = () => {
    return (
        <StyledMainMenu>
            <MenuItem>
                Ecosystem
                <Icon src='/assets/icons/chevron-down.svg'/>
            </MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>Media</MenuItem>
            <MenuItem>Investment</MenuItem>
            <MenuItem>
                Docs
                <Icon src='/assets/icons/chevron-down.svg'/>
            </MenuItem>
        </StyledMainMenu>
    )
}