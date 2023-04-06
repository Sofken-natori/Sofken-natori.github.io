'use strict';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default class MyDocument extends Document<{
    prefix?: string
}> {
    public static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        // eslint-disable-next-line no-undefined
        const prefix = /^\/\d{3}/u.test(ctx.pathname) ? undefined : 'og: https://ogp.me/ns#';
        return {
            ...initialProps,
            prefix
        };
    }

    public render(): JSX.Element {
        return (
            <Html lang="ja" prefix={this.props.prefix}>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link rel="icon" type="image/vnd.microsoft.icon" sizes="32x32" href={`${process.env['ROOT']}/favicon.ico`} />
                    <link rel="icon" type="image/svg+xml" href="/icon.svg" />
                    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href={`${process.env['ROOT']}/apple-touch-icon.png`} />
                    <link rel="manifest" type="text/webappmanifest" href={`${process.env['ROOT']}/manifest.webmanifest`} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta property="og:site_name" content="ソフトウェア研究部会" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@sofken_natori" />
                </Head>
                <body>
                    <Header />
                    <div className="content-container">
                        <Navigation />
                        <main>
                            <Main />
                        </main>
                    </div>
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
