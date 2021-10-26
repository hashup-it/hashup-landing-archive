import { FunctionComponent } from 'react'
import { BoldText, ColoredText } from '../../Shared'
import { Hyperlink } from '../../Shared/sections.styles'
import { AddToMetamask } from './AddToMetamask'
import { CopyAdress } from './CopyAdress'
import {
    SocialIcon,
    StyledBottomGroup,
    StyledHeaderBottom,
    StyledLine,
    StyledMouseIcon,
    StyledScrollDown,
    StyledSocialMedia,
    StyledTokenInfo,
    StyledTokenInfoItem
} from './index.styles'

interface HeaderBottomProps {

}

const HeaderBottom: FunctionComponent<HeaderBottomProps> = () => {
    return (
        <StyledHeaderBottom>
            <StyledScrollDown>
                <StyledMouseIcon src="/assets/icons/mouse.svg" />
                Scroll to learn more
            </StyledScrollDown>
            <StyledBottomGroup>
                <StyledTokenInfo>
                    <StyledTokenInfoItem>
                        <BoldText>All gamers: </BoldText>
                        <ColoredText>5172</ColoredText>
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <BoldText>Contract: </BoldText>
                        <CopyAdress />
                        <AddToMetamask />
                    </StyledTokenInfoItem>
                </StyledTokenInfo>
                <StyledLine />
                <StyledSocialMedia>
                    <Hyperlink href="https://www.facebook.com/HashUpIt"><SocialIcon src="/assets/icons/facebook.svg" /></Hyperlink>
                    <Hyperlink href="https://www.linkedin.com/company/hashupit/mycompany/"><SocialIcon
                        src="/assets/icons/linkedin.svg" /></Hyperlink>
                    <Hyperlink href="https://www.instagram.com/hashup.it/"><SocialIcon
                        src="/assets/icons/instagram.svg" /></Hyperlink>
                </StyledSocialMedia>
            </StyledBottomGroup>
        </StyledHeaderBottom>
    )
}

export default HeaderBottom
