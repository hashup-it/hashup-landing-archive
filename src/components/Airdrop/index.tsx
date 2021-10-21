import { useState } from "react";
import { FunctionComponent } from "react";
import { BoldText, ColoredText } from "../Shared";
import { StyledAirdrop, StyledAirdropHeader, StyledAirdropInfo, StyledAirdropMain, StyledAirdropReferral, StyledBeforeConnectWrapper, StyledInfoItem, StyledInfoLabel, StyledInfoValue, StyledInput, StyledInputButton, StyledInputButtonFill, StyledInputIcon, StyledInputWrapper, StyledMainHeader, StyledMainSmall } from "./airdrop.styles";
import Web3 from 'web3'
import { useEffect } from "react";
import hashInfo from "./hash-info";

import { AbiItem } from 'web3-utils'
import abi from './abi.json'

interface AirdropProps {
    
}
 
const Airdrop: FunctionComponent<AirdropProps> = () => {

    const [gamersCount, setGamersCount] = useState(1337)
    const [tokenLeft, setTokenLeft] = useState(1337)

    let web3
    let contract 


    useEffect(() => {
        (async () => {
            if((window as any).ethereum) {
                web3 = new Web3('https://bsc-dataseed1.binance.org:443')
                contract = await new web3.eth.Contract(hashInfo.abi as AbiItem[], hashInfo.contractAddress);
                
                let gamersCountRes = await contract.methods.gamersCount().call();
                let hashLeftRes = await contract.methods.HashLeft().call();
                
                setGamersCount(gamersCountRes)

                let hashFromWei = Number(web3.utils.fromWei(hashLeftRes));
                setTokenLeft(hashFromWei)
            }
        })()
    })

    return ( 
        <StyledAirdrop>
            <StyledAirdropHeader>
                Join the <BoldText>Big <ColoredText>Airdrop</ColoredText></BoldText> from <BoldText><ColoredText>#</ColoredText>HashUp</BoldText>
            </StyledAirdropHeader>
            <StyledAirdropMain>
                <StyledMainHeader>Zarezerwuj swój unikalny Nick aby otrzymać Airdrop</StyledMainHeader>
                <StyledMainSmall>Twój nick będzie reprezentować Twoją obecność na platformie HashUp</StyledMainSmall>
                <StyledInputWrapper>
                    <StyledInputIcon/>
                    <StyledInput placeholder="Enter your new HashUp nickname"/>
                    <StyledInputButton>
                        <StyledInputButtonFill>

                        </StyledInputButtonFill>
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
                <StyledBeforeConnectWrapper>
                    Connect to metamask first to&nbsp;<BoldText> access referral options</BoldText>
                </StyledBeforeConnectWrapper>
            </StyledAirdropReferral>
        </StyledAirdrop>
    );
}
 
export default Airdrop;