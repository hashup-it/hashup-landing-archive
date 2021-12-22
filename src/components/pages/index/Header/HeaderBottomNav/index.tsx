import hashInfo from "components/global/Airdrop/hash-info"
import { useEffect, useState } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import { AddToMetamask } from "./AddToMetamask"
import { CopyAdress } from "./CopyAdress"
import {
    StyledDataGroup,
    StyledContainer,
    StyledScrollDownNote,
    StyledSocialMediaBox,
    StyledTokenInfo,
    StyledTokenInfoItem,
} from "./index.styles"
import { assetsUrl, SocialMediaIcons, SocialMediaUrls } from "config"
import Web3 from "web3"
import { AbiItem } from "web3-utils"
import { useTranslation } from "react-i18next"

const ScrollDownNote = () => {
    const { t } = useTranslation()

    return (
        <StyledScrollDownNote>
            <img className="mouse-icon" src={assetsUrl("icons/mouse.svg")} alt="" />
            <span className="text">
                {`${t("header.scroll.1")}`}
                <StyledColoredText>{t("header.scroll.2")}</StyledColoredText>
            </span>
        </StyledScrollDownNote>
    )
}

const HeaderBottom = () => {
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
        <StyledContainer>
            <ScrollDownNote />
            <StyledDataGroup>
                <StyledTokenInfo>
                    <StyledTokenInfoItem>
                        <b>{t("header.all-gamers")}</b>
                        <StyledColoredText>{gamersCount}</StyledColoredText>
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <b>{t("header.contract")}</b>
                        <CopyAdress />
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <AddToMetamask />
                    </StyledTokenInfoItem>
                </StyledTokenInfo>
                <StyledSocialMediaBox>
                    <a href={SocialMediaUrls.linkedIn}>
                        <img src={SocialMediaIcons.linkedin} alt="LinkedIn" />
                    </a>
                    <a href={SocialMediaUrls.telegram}>
                        <img src={SocialMediaIcons.telegram} alt="Telegram" />
                    </a>
                    <a href={SocialMediaUrls.twitter}>
                        <img src={SocialMediaIcons.twitter} alt="Twitter" />
                    </a>
                    <a href={SocialMediaUrls.facebook}>
                        <img src={SocialMediaIcons.facebook} alt="Facebook" />
                    </a>
                    <a href={SocialMediaUrls.instagram}>
                        <img src={SocialMediaIcons.instagram} alt="Instagram" />
                    </a>
                    <a href={SocialMediaUrls.discord}>
                        <img src={SocialMediaIcons.discord} alt="Discord" />
                    </a>
                </StyledSocialMediaBox>
            </StyledDataGroup>
        </StyledContainer>
    )
}

export default HeaderBottom
