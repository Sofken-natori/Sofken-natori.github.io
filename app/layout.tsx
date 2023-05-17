'use strict';

import '../styles/globals.scss';
import Script from 'next/script';
import { DOCUMENT_ROOT } from '../lib/contants';
import { Footer, Header, Navigation } from './components';
import { NotoSansJP } from './font';
import type { JSX, ReactNode } from 'react';

type Props = {
    children: ReactNode
};

export default function Layout({ children }: Props): JSX.Element {
    return (
        <html lang="ja" prefix="og: https://ogp.me/ns#">
            <head />
            <body className={NotoSansJP.className}>
                <Header />
                <div className="content-container">
                    <Navigation />
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
                <Script async strategy="lazyOnload" src={`${DOCUMENT_ROOT}/prism.js`} />
            </body>
        </html>
    );
}
