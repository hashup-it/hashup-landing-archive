import hashInfo from "components/Airdrop/hash-info"
import { useEffect, useState } from "react"
import { FunctionComponent } from "react"
import { BoldText, ColoredText } from "../../Shared"
import { Hyperlink } from "../../Shared/sections.styles"
import { AddToMetamask } from "./AddToMetamask"
import { CopyAdress } from "./CopyAdress"
import {
    StyledDataGroup,
    StyledHeaderBottom,
    StyledMouseIcon,
    StyledScrollDown,
    StyledSocialMediaBox,
    StyledTokenInfo,
    StyledTokenInfoItem,
} from "./index.styles"
import { assetsUrl, SocialMediaIcons, SocialMediaUrls } from "config"
import Web3 from "web3"
import { AbiItem } from "web3-utils"
import { useTranslation } from "react-i18next"

interface HeaderBottomProps {}

const HeaderBottom: FunctionComponent<HeaderBottomProps> = () => {
    const [gamersCount, setGamersCount] = useState(1337)
    const { t } = useTranslation()

    useEffect(() => {
        ;(async () => {
            const web3 = new Web3("https://bsc-dataseed.binance.org/")
            const contract = await new web3.eth.Contract(
                hashInfo.abi as AbiItem[],
                hashInfo.contractAddress
            )
            let gamersCountRes = await contract.methods.gamersCount().call()
            setGamersCount(gamersCountRes)
        })()
    }, [])

    return (
        <StyledHeaderBottom>
            <StyledScrollDown>
                <StyledMouseIcon src={assetsUrl("icons/mouse.svg")} />
                {t("header.scroll")}
            </StyledScrollDown>
            <StyledDataGroup>
                <StyledTokenInfo>
                    <StyledTokenInfoItem>
                        <BoldText>{t("header.all-gamers")}</BoldText>
                        <ColoredText>{gamersCount}</ColoredText>
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <BoldText>{t("header.contract")}</BoldText>
                        <CopyAdress />
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <AddToMetamask />
                    </StyledTokenInfoItem>
                </StyledTokenInfo>
                <StyledSocialMediaBox>
                    <Hyperlink href={SocialMediaUrls.linkedIn}>
                        <img src={SocialMediaIcons.linkedin} alt="LinkedIn" />
                    </Hyperlink>
                    <Hyperlink href={SocialMediaUrls.telegram}>
                        <img src={SocialMediaIcons.telegram} alt="Telegram" />
                    </Hyperlink>
                    <Hyperlink href={SocialMediaUrls.twitter}>
                        <img src={SocialMediaIcons.twitter} alt="Twitter" />
                    </Hyperlink>
                    <Hyperlink href={SocialMediaUrls.facebook}>
                        <img src={SocialMediaIcons.facebook} alt="Facebook" />
                    </Hyperlink>
                    <Hyperlink href={SocialMediaUrls.instagram}>
                        <img src={SocialMediaIcons.instagram} alt="Instagram" />
                    </Hyperlink>
                </StyledSocialMediaBox>
            </StyledDataGroup>
        </StyledHeaderBottom>
    )
}

export default HeaderBottom
