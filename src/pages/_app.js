import { AccountContextProvider } from "context/account"
import Head from "next/head"
import { LandingContainer } from "App.styles"
import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { GlobalStyle } from "__styles__/GlobalStyle.style"
import Script from "next/script"
import { scriptsUrl } from "config"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>The HashUp Cartridge</title>
                <meta name="description" content="HashUp.it – We will free the game market." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Script src={scriptsUrl("mailerlite-universal.js")} />
            <AccountContextProvider>
                <GlobalStyle />
                <LandingContainer>
                    <NavBar />

                    <Component {...pageProps} />

                    <Footer />
                </LandingContainer>
            </AccountContextProvider>
        </>
    )
}

export default App
