import { StyledTokenIcon, Tooltip } from "../index.styles"

export const AddToMetamask = () => {
    const handleAddToMetamask = async () => {
        const tokenAddress = "0x2ce9daaaecf41914504d60ea9c7c8df1dc44ba9f"
        const tokenSymbol = "Hash"
        const tokenDecimals = 18
        const tokenImage = "https://i.ibb.co/QrPpyW3/icon-metamask.png"

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await (window as any).ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20", // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                },
            })

            if (wasAdded) {
                console.log("Thanks for your interest!")
            } else {
                console.log("Your loss!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledTokenIcon icon="/assets/icons/metamask.svg" onClick={() => handleAddToMetamask()}>
            <Tooltip>Add # to metamask</Tooltip>
        </StyledTokenIcon>
    )
}
