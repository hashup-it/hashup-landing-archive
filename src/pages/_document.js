import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="assets/hashup.ico" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="apple-touch-icon" href="assets/logo-192.png" />
                    <link rel="manifest" href="manifest.json" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
