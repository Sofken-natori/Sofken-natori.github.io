'use strict';

import Head from 'next/head';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="仙台高専名取Cのソフトウェア研究部会のホームページです。" />
                <meta property="og:url" content="https://sofken-natori.github.io/404/" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="404" />
                <meta property="og:description" content="仙台高専名取Cのソフトウェア研究部会のホームページです。" />
                <title>404 - ソフトウェア研究部会</title>
            </Head>
            <h2>404 - Not Found</h2>
            <p>
                指定されたページが存在しません。<br />
                <Link href="mailto:sofken.natori@gmail.com">こちら</Link>までご一報頂けるとありがたいです。<br />
                <Link href="/">トップに戻る</Link>
            </p>
        </>
    );
}
