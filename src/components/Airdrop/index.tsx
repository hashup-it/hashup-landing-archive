import { FunctionComponent, useEffect, useState } from 'react'
import { BoldText, ColoredText } from '../Shared'
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
    StyledReferralInfo
} from './airdrop.styles'
import Web3 from 'web3'
import hashInfo from './hash-info'

import { AbiItem } from 'web3-utils'

interface AirdropProps {
    account: string | any
}

const Airdrop: FunctionComponent<AirdropProps> = ({
                                                      account
                                                  }) => {

    const [gamersCount, setGamersCount] = useState(1337)
    const [tokenLeft, setTokenLeft] = useState(1337)
    const [hashForRef, setHashForRef] = useState(1337)

    const [nicknameInput, setNicknameInput] = useState('')

    let web3
    let contract

    const blockchainProviderUrl = 'https://bsc-dataseed1.binance.org:443'


    useEffect(() => {
        (async () => {
            if ((window as any).ethereum) {


                web3 = new Web3(blockchainProviderUrl)
                contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)

                let gamersCountRes = await contract.methods.gamersCount().call()
                let hashLeftRes = await contract.methods.HashLeft().call()

                setGamersCount(gamersCountRes)

                let hashFromWei = Number(web3.utils.fromWei(hashLeftRes))
                setTokenLeft(hashFromWei)

                let hashForRef = await contract.methods.getHashForLogin().call()
                setHashForRef(hashForRef / 10)
            }
        })()
    })

    const handleNicknameInput = (e: any) => {
        setNicknameInput(e.target.value)

    }

    const handleLoginButton = async () => {
        if (account) {
            await (window as any).ethereum.enable()

            let accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })

            web3 = await new Web3(blockchainProviderUrl)
            contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)
            alert(account)
            let res = await contract.methods.loginToTheHashUp('xDD').send({ from: account })
            alert(res)
        } else {
            alert('nie essa')
        }
    }

    return (
        <StyledAirdrop>
            <StyledAirdropHeader>
                Join
                the <BoldText>Big <ColoredText>Airdrop</ColoredText></BoldText> from <BoldText><ColoredText>#</ColoredText>HashUp</BoldText>
            </StyledAirdropHeader>
            <StyledAirdropMain>
                <StyledMainHeader>Zarezerwuj swój unikalny Nick aby otrzymać Airdrop</StyledMainHeader>
                <StyledMainSmall>Twój nick będzie reprezentować Twoją obecność na platformie HashUp</StyledMainSmall>
                <StyledInputWrapper>
                    <StyledInputIcon />
                    <StyledInput
                        placeholder="Enter your new HashUp nickname"
                        onChange={handleNicknameInput}
                    />
                    <StyledInputButton onClick={() => handleLoginButton()}>
                        <StyledInputButtonFill />
                    </StyledInputButton>
                </StyledInputWrapper>
            </StyledAirdropMain>
            <StyledAirdropInfo>
                <StyledInfoItem>
                    <StyledInfoLabel>Token left:</StyledInfoLabel>
                    <StyledInfoValue>{tokenLeft}</StyledInfoValue>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoLabel>Gamers count:</StyledInfoLabel>
                    <StyledInfoValue>{gamersCount}</StyledInfoValue>
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledInfoLabel>Price <ColoredText>#</ColoredText></StyledInfoLabel>
                    <StyledInfoValue>0.0075 $</StyledInfoValue>
                </StyledInfoItem>
            </StyledAirdropInfo>
            <StyledAirdropReferral>
                {!account && <StyledBeforeConnectWrapper>
                    Connect to metamask first to&nbsp;<BoldText> access referral options</BoldText>
                </StyledBeforeConnectWrapper>}
                {account &&
                    <StyledAfterConnectOptions>
                        <StyledCopyReferral>
                            Copy your referral
                            <StyledCopyReferralIcon src="/assets/icons/copy.svg" />
                        </StyledCopyReferral>
                        <StyledReferralInfo>
                            Send a referral to friend<br /> and get {hashForRef}# for his login!
                        </StyledReferralInfo>
                    </StyledAfterConnectOptions>
                }
            </StyledAirdropReferral>
        </StyledAirdrop>
    )
}

export default Airdrop
