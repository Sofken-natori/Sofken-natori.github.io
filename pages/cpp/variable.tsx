'use strict';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { DOCUMENT_ROOT } from '../../lib/contants';

export default function CPPEntVariable(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="C++の変数の入門です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/cpp/variable" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="変数 - C++入門" />
                <meta property="og:description" content="C++の変数の入門です。" />
                <title>変数 - C++入門 - ソフトウェア研究部会</title>
            </Head>
            <h2>C++入門「変数」</h2>
            <p>
                変数とは、様々な値を保持しておく物です。<wbr />
                例えば整数、小数、正しいか否か、文字列などが保持出来ますが、1つの変数では基本的に決めた1種類の物しか扱えません。
            </p>
            <p>
                変数の<Link href={`${DOCUMENT_ROOT}/cpp/type`}>型</Link>と名前を決める事を<strong>宣言</strong>と言います。
                <pre className="line-numbers">
                    <code className="language-cpp">
                        int a;
                        bool b;
                    </code>
                </pre>
            </p>
            <Script async src={`${DOCUMENT_ROOT}/prism.js`} strategy="lazyOnload" />
        </>
    );
}
