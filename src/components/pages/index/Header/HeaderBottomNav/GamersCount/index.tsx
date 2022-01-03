import { useEffect, useState } from "react"
import Web3 from "web3"
import { AbiItem } from "web3-utils"
import hashInfo from "components/global/Airdrop/hash-info"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledLoadingSpinner } from "components/shared/loading.styles"

const GamersCount = () => {
    const [gamersCount, setGamersCount] = useState<number | null>(null)

    useEffect(() => {
        if (gamersCount === null) {
            const getGamersCount = async () => {
                const web3 = new Web3("https://bsc-dataseed.binance.org/")
                const contract = await new web3.eth.Contract(
                    hashInfo.abi as AbiItem[],
                    hashInfo.contractAddress
                )
                let gamersCountRes = await contract.methods.gamersCount().call()
                setGamersCount(gamersCountRes)
            }
            getGamersCount()
        }
    }, [gamersCount])

    return (
        <>
            {gamersCount === null ? (
                <StyledLoadingSpinner />
            ) : (
                <StyledColoredText>{gamersCount}</StyledColoredText>
            )}
        </>
    )
}

export default GamersCount
