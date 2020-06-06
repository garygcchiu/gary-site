import Document, { Html, Head, Main, NextScript } from 'next/document'
import favicon from "../public/favicon.ico";
import appleTouchFavicon from "../public/apple-touch-icon.png";
import manifest from "../public/site.webmanifest";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={'en'}>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument