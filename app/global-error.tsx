/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
'use strict';
'use client';

import Link from 'next/link';
import { Footer, Header, Navigation } from './components';
import { JSX, useEffect } from 'react';

type Props = {
    error: Error
};

export default function GlobalError({ error }: Props): JSX.Element {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <html lang="ja">
            <body>
                <Header />
                <div className="content-container">
                    <Navigation />
                    <main>
                        <h2>Error</h2>
                        <p>
                            読み込み中にエラーが発生しました。<br />
                            <button onClick={() => window.location.reload()}>再読み込み</button>
                            <Link href="/">トップに戻る</Link>
                        </p>
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
