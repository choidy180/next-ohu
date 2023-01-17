import Document, { DocumentContext, Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>,
                ],
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shorcut icon" href="/images/static/favicon.ico" />
                    {/* jQuery */}
                    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                    {/* iamport.payment.js */}
                    <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}