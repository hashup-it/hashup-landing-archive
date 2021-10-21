import { MenuItem, StyledMainMenu } from './index.styles'
import { Hyperlink } from '../../Shared/sections.styles'

export const MainMenu = () => {
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
        </StyledMainMenu>
    )
}
