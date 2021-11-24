import { useEffect, useRef, useState } from "react"
import { BoldText, ColoredText } from "../Shared"
import {
    StyledAfterConnectOptions,
    StyledAirdrop,
    StyledAirdropHeader,
    StyledAirdropInfo,
    StyledAirdropMain,
    StyledAirdropReferral,
    StyledBeforeConnectWrapper,
    StyledCopyReferral,
    StyledCopyReferralIcon,
    StyledInfoItem,
    StyledInfoLabel,
    StyledInfoValue,
    StyledInput,
    StyledInputButton,
    StyledInputButtonFill,
    StyledInputIcon,
    StyledInputWrapper,
    StyledMainHeader,
    StyledMainSmall,
    StyledReferralInfo,
} from "./index.styles"
import Web3 from "web3"
import { AbiItem } from "web3-utils"
import hashInfo from "./hash-info"
import { AirdropPopup } from "./AirdropPopup"
import { useTranslation } from "react-i18next"
import { useAccountContext } from "context/account"

const queryString = require("query-string")
const BLOCKCHAIN_PROVIDER_URI = "https://bsc-dataseed.binance.org"

const Airdrop = () => {
    const [buddy, setBuddy] = useState<string | null>(null)
    const { account, showWalletSelector } = useAccountContext()
    const { t } = useTranslation()

    if (typeof window !== 'undefined') {
        
    }

    useEffect(() => {
        const parsed = queryString.parse(window.location.search)
        setBuddy(parsed.buddy)
    }, [])

    const inputElement = useRef<any>(null)

    const [gamersCount, setGamersCount] = useState(1337)
    const [tokenLeft, setTokenLeft] = useState(1337)
    const [hashForRef, setHashForRef] = useState(1337)

    const [nicknameInput, setNicknameInput] = useState("")
    const [popupOpened, setPopupOpened] = useState(false)

    const [userNickname, setUserNickname] = useState("")
    const [airdropDisabled, setAirdropDisabled] = useState(false)

    const updateHashInfo = async (web3: Web3, contract: any) => {
        let gamersCountRes = await contract.methods.gamersCount().call()
        setGamersCount(gamersCountRes)

        let hashLeftRes = await contract.methods.HashLeft().call()
        let hashFromWei = Number(web3.utils.fromWei(hashLeftRes))
        setTokenLeft(hashFromWei)

        let hashForRef = await contract.methods.getHashForLogin().call()
        setHashForRef(hashForRef / 10)
    }

    const handleUserHasNickname = async (web3: Web3, contract: any) => {
        let nickname = await contract.methods.getNickname(account).call()

        setUserNickname(nickname)
        setAirdropDisabled(nickname != "")

        inputElement.current.value = nickname
    }

    const handleCopyReferral = async () => {
        await navigator.clipboard.writeText(
            `${window.location.protocol}//${window.location.host}/?buddy=${account}`
        )
    }

    const handleNicknameInput = (event: any) => {
        if (!airdropDisabled) {
            setNicknameInput(event.target.value)
        }
    }

    const isNicknameTaken = async (name: string, web3: Web3, contract: any) => {
        let addressForNickname = await contract.methods.getAddress(name).call()
        return addressForNickname != "0x0000000000000000000000000000000000000000"
    }

    const handleLoginButton = async () => {
        if (account) {
            if (userNickname != "") return

            await (window as any).ethereum.enable()
            const web3 = await new Web3(Web3.givenProvider)
            const contract = await new web3.eth.Contract(
                hashInfo.abi as AbiItem[],
                hashInfo.contractAddress
            )

            if (await isNicknameTaken(nicknameInput, web3, contract)) {
                alert("Nick jest zajęty")
                return
            }

            let success = false

            if (buddy) {
                await contract.methods
                    .loginToTheHashUpWithReflink(nicknameInput, buddy)
                    .send({ from: account })
                    .then((res: any) => {
                        console.log(res)
                        success = true
                    })
            } else {
                await contract.methods
                    .loginToTheHashUp(nicknameInput)
                    .send({ from: account })
                    .then((res: any) => {
                        console.log(res)
                        success = true
                    })
            }

            if (success) {
                await handleUserHasNickname(web3, contract)
                setPopupOpened(true)
            }
        } else {
            alert("Zaloguj się")
        }
    }

    useEffect(() => {
        ;(async () => {
            const web3 = new Web3(BLOCKCHAIN_PROVIDER_URI)
            const contract = await new web3.eth.Contract(
                hashInfo.abi as AbiItem[],
                hashInfo.contractAddress
            )

            await updateHashInfo(web3, contract)
            if (account) {
                await handleUserHasNickname(web3, contract)
            }
        })()
    }, [account, userNickname])

    return (
        <StyledAirdrop>
            <StyledAirdropHeader>
                Join the{" "}
                <BoldText>
                    Big <ColoredText>Airdrop</ColoredText>
                </BoldText>{" "}
                from{" "}
                <BoldText>
                    <ColoredText>#</ColoredText>HashUp
                </BoldText>
            </StyledAirdropHeader>
            <StyledAirdropMain>
                <StyledMainHeader>{t("airdrop-reserve")}</StyledMainHeader>
                <StyledMainSmall>{t("airdrop-nick")}</StyledMainSmall>
                <StyledInputWrapper>
                    <StyledInputIcon />
                    <StyledInput
                        placeholder={t("airdrop-nick-input")}
                        onChange={handleNicknameInput}
                        disabled={airdropDisabled}
                        ref={inputElement}
                    />
                    <StyledInputButton
                        isDisabled={airdropDisabled}
                        onClick={() => handleLoginButton()}
                    >
                        <StyledInputButtonFill isDisabled={airdropDisabled} />
                    </StyledInputButton>
                </StyledInputWrapper>
            </StyledAirdropMain>
            <StyledAirdropInfo>
                <StyledInfoItem>
                    <StyledInfoLabel>{t("airdrop-#left")}</StyledInfoLabel>
                    <StyledInfoValue>{tokenLeft}</StyledInfoValue>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoLabel>{t("airdrop-players")}</StyledInfoLabel>
                    <StyledInfoValue>{gamersCount}</StyledInfoValue>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoLabel>{t("airdrop-price")}</StyledInfoLabel>
                    <StyledInfoValue>0.02 $</StyledInfoValue>
                </StyledInfoItem>
            </StyledAirdropInfo>
            <StyledAirdropReferral>
                {!account && (
                    <StyledBeforeConnectWrapper onClick={showWalletSelector}>
                    {t("airdrop-connect")}
                    </StyledBeforeConnectWrapper>
                )}
                {account && (
                    <StyledAfterConnectOptions>
                        <StyledCopyReferral onClick={handleCopyReferral}>
                            Copy your referral
                            <StyledCopyReferralIcon src="/assets/icons/copy.svg" />
                        </StyledCopyReferral>
                        <StyledReferralInfo>
                            Send a referral to friend
                            <br /> and get {hashForRef}# for his login!
                        </StyledReferralInfo>
                    </StyledAfterConnectOptions>
                )}
            </StyledAirdropReferral>
            {popupOpened && <AirdropPopup setPopupOpened={setPopupOpened} />}
        </StyledAirdrop>
    )
}

export default Airdrop
