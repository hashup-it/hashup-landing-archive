import { FC, useState, createContext, useContext } from "react"

type AccountContextType = {
    account: string | null
    isWalletSelectorShown: boolean

    handleMetamaskConnection: () => void
    showWalletSelector: () => void
    hideWalletSelector: () => void
}

// @ts-ignore
export const AccountContext = createContext<AccountContextType>()

export const AccountContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
    const [account, setAccount] = useState<string | null>(null)
    const [isWalletSelectorShown, setIsWalletSelectorShown] = useState<boolean>(false)

    const handleMetamaskConnection = async () => {
        const w = window as any

        if (w.ethereum) {
            const accounts = await w.ethereum.request({ method: "eth_requestAccounts" })
            setAccount(accounts[0])

            w.ethereum.on("accountsChanged", function (accounts: any) {
                setAccount(accounts[0])
            })
        }
    }

    const showWalletSelector = () => {
        setIsWalletSelectorShown(true)
    }

    const hideWalletSelector = () => {
        setIsWalletSelectorShown(false)
    }

    return (
        <AccountContext.Provider
            value={{
                account,
                isWalletSelectorShown,
                handleMetamaskConnection,
                hideWalletSelector,
                showWalletSelector,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = (): AccountContextType => useContext(AccountContext)
