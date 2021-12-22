import { AccountContextProvider } from "contexts/account"
import Head from "next/head"
import Footer from "components/global/Footer"
import NavBar from "components/global/NavBar"
import { GlobalStyles } from "__styles__/global"
import Script from "next/script"
import { scriptsUrl } from "config"
import GlobalContentContainer from "components/global/GlobalContentContainer"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Script src={scriptsUrl("google-analitics.js")} strategy="beforeInteractive" />
            <Script src={scriptsUrl("mailerlite-universal.js")} />
            <Head>
                <title>The HashUp Cartridge</title>
                <meta name="description" content="HashUp.it – We will free the game market." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AccountContextProvider>
                <GlobalStyles />
                <GlobalContentContainer>
                    <NavBar />

                    <Component {...pageProps} />

                    <Footer />
                </GlobalContentContainer>
            </AccountContextProvider>
        </>
    )
}

export default App
