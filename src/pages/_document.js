import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
    // It's important for styled-components with Next.js
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
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="facebook-domain-verification"
                        content="vb77o69t264e4n8m5zykf5k8e9ibiq"
                    />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="assets/brand/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="apple-touch-icon" href="assets/logo-192.png" />
                    <link rel="manifest" href="manifest.json" />
                </Head>
                <body>
                    {/* Facebook Pixel */}
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            src="https://www.facebook.com/tr?id=949316722346083&ev=PageView&noscript=1"
                            alt=""
                            priority
                        />
                    </noscript>
                    {/* Google analitics */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-PHHQ3TR"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
