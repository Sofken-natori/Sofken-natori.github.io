'use strict';
'use client';

import Link from 'next/link';
import { Footer, Header, Navigation } from './components';
import { useEffect } from 'react';

type Props = {
    error: Error,
    reset: () => void
};

export default function GlobalError({ error, reset }: Props): JSX.Element {
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
                            <a href="mailto:sofken.natori@gmail.com">こちら</a>までご一報頂けるとありがたいです。<br />
                            <button onClick={() => reset()}>再読み込み</button>
                            <Link href="/">トップに戻る</Link>
                        </p>
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}