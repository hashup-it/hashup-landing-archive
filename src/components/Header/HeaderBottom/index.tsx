import hashInfo from 'components/Airdrop/hash-info'
import { useEffect, useState } from 'react'
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

import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

interface HeaderBottomProps {

}

const HeaderBottom: FunctionComponent<HeaderBottomProps> = () => {

    const [gamersCount, setGamersCount] = useState(1337)

    useEffect(() => {
        (async () => {
            const web3 = new Web3("https://bsc-dataseed.binance.org/")
            const contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)
            let gamersCountRes = await contract.methods.gamersCount().call()
            setGamersCount(gamersCountRes)
        })()
    }, [])

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
                        <ColoredText>{gamersCount}</ColoredText>
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <BoldText>Contract: </BoldText>
                        <CopyAdress />
                        <AddToMetamask />
                    </StyledTokenInfoItem>
                </StyledTokenInfo>
                <StyledLine />
                <StyledSocialMedia>
                    <Hyperlink href="https://www.linkedin.com/company/hashupit">
                        <SocialIcon src="/assets/icons/linkedin.svg" />
                    </Hyperlink>
                    <Hyperlink href="https://t.me/HashUpAnnouncements">
                        <SocialIcon src="/assets/icons/telegram.svg" />
                    </Hyperlink>
                    <Hyperlink href="https://twitter.com/HashUp_it">
                        <SocialIcon src="/assets/icons/twitter.svg" />
                    </Hyperlink>
                    <Hyperlink href="https://www.facebook.com/HashUpIt">
                        <SocialIcon src="/assets/icons/facebook.svg" />
                    </Hyperlink>
                    <Hyperlink href="https://www.instagram.com/hashup.it/">
                        <SocialIcon src="/assets/icons/instagram.svg" />
                    </Hyperlink>
                </StyledSocialMedia>
            </StyledBottomGroup>
        </StyledHeaderBottom>
    )
}

export default HeaderBottom
