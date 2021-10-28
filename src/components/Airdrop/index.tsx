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
import { useLocation } from 'react-router-dom'
import { AnyStyledComponent } from 'styled-components'
import { AirdropPopup } from './AirdropPopup'
import { useRef } from 'react'
const queryString = require('query-string');




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
    const [popupOpened, setPopupOpened] = useState(true)

    const inputElement = useRef(null);

    let web3, contract;

    const blockchainProviderUrl = Web3.givenProvider;

    const parsed = queryString.parse(window.location.search);
    const buddy = parsed.buddy;
    const [userNickname, setUserNickname] = useState('');
    const [airdropDisabled, setAirdropDisabled] = useState(false)
    

    useEffect(() => {
        (async () => {
            if ((window as any).ethereum) {

                web3 = new Web3(blockchainProviderUrl)
                contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)

                updateHashInfo(web3, contract)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            web3 = new Web3(blockchainProviderUrl)
            contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)

            if(account)
                handleUserHasNickname(web3, contract)
        })()
        
    }, [account, userNickname])
    
    const updateHashInfo = async (web3 : Web3, contract : any) => {
        let gamersCountRes = await contract.methods.gamersCount().call()
        setGamersCount(gamersCountRes)

        let hashLeftRes = await contract.methods.HashLeft().call()
        let hashFromWei = Number(web3.utils.fromWei(hashLeftRes))
        setTokenLeft(hashFromWei)

        let hashForRef = await contract.methods.getHashForLogin().call()
        setHashForRef(hashForRef / 10)
    }

    const handleUserHasNickname = async (web3 : Web3, contract : any) => {
        let nickname = await contract.methods.getNickname(account).call();
        setUserNickname(nickname)
        setAirdropDisabled(nickname != ''); //leave semicolon
        (inputElement as any).current.value = nickname;
    }

    const handleCopyReferral = () => {
        navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/?buddy=${account}`)
    }

    const handleNicknameInput = (e : any) => {
        if (!airdropDisabled) {
            setNicknameInput(e.target.value)
        }
    }

    const isNicknameTaken = async (name : string, web3 : Web3, contract : any) => {
        let addresForNickname = await contract.methods.getAddress(name).call();
        return (addresForNickname != "0x0000000000000000000000000000000000000000");
    }

    const handleLoginButton = async () => {
        if (account) {
            if(userNickname != '')
                return;

            await (window as any).ethereum.enable()
            web3 = await new Web3(Web3.givenProvider)
            contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress)

            if(await isNicknameTaken(nicknameInput, web3, contract)) {
                return;
            }
            
            let success = false;
        
            if(buddy) {
                await contract.methods.loginToTheHashUpWithReflink(nicknameInput, buddy).send({ from: account }).then((res : any) => {
                    console.log(res)
                    success = true;
                })
            } else {
                await contract.methods.loginToTheHashUp(nicknameInput).send({ from: account }).then((res : any) => {
                    console.log(res)
                    success = true;
                })
            }

            if(success) {
                handleUserHasNickname(web3, contract)
                setPopupOpened(true)
            }
           

        } else {
            alert('Login first!')
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
                        disabled={airdropDisabled}
                        ref={inputElement}

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
                        <StyledCopyReferral onClick={() => handleCopyReferral()}>
                            Copy your referral
                        <StyledCopyReferralIcon src="/assets/icons/copy.svg" />
                        </StyledCopyReferral>
                        <StyledReferralInfo>
                            Send a referral to friend<br /> and get {hashForRef}# for his login!
                        </StyledReferralInfo>
                    </StyledAfterConnectOptions>
                }
            </StyledAirdropReferral>
            {popupOpened &&<AirdropPopup setPopupOpened={setPopupOpened}></AirdropPopup>}
        </StyledAirdrop>
    )
}

export default Airdrop
