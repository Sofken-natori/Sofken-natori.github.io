'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/prism.css';
import '../styles/globals.scss';
import { Footer, Header, Navigation } from './components';
import { NotoSansJP } from './font';
import type { ReactNode } from 'react';

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
            </body>
        </html>
    );
}
