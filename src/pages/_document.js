import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {

    // It's important for styled-components with Next.js
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
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
                    <script dangerouslySetInnerHTML={{
                        __html: `
                      <!-- MailerLite Universal -->
        (function (m, a, i, l, e, r) {
            m['MailerLiteObject'] = e

            function f() {
                var c = { a: arguments, q: [] }
                var r = this.push(c)
                return 'number' != typeof r ? r : f.bind(c.q)
            }

            f.q = f.q || []
            m[e] = m[e] || f.bind(f.q)
            m[e].q = m[e].q || f.q
            r = a.createElement(i)
            var _ = a.getElementsByTagName(i)[0]
            r.async = 1
            r.src = l + '?v' + (~~(new Date().getTime() / 1000000))
            _.parentNode.insertBefore(r, _)
        })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml')

        var ml_account = ml('accounts', '3556595', 'b7a5n7e8w5', 'load')
    <!-- End MailerLite Universal -->
                  `
                    }} />
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
