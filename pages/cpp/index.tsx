'use strict';

import Head from 'next/head';
import Link from 'next/link';

export default function CPPEntHome(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="C++入門の目次です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/cpp/" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="目次 - C++入門" />
                <meta property="og:description" content="C++入門の目次です。" />
                <title>目次 - C++入門 - ソフトウェア研究部会</title>
            </Head>
            <h2>C++入門</h2>
            <p>
                C++入門にようこそ！<br />
                このC++入門は以前から部内で継承されていた「C++講習会」を少し修正した上で一般公開した物です。<br />
                基本的に書いてある文章は<Link href="https://www.gnu.org/licenses/fdl-1.3.html"><abbr title="GNU Free Document License, Version 1.3">GNU FDL 1.3</abbr></Link><wbr />
                および<Link href="https://creativecommons.org/licenses/by-sa/4.0/"><abbr title="Creative Commons Attribution-ShareAlike 4.0 International">CC BY-SA 4.0</abbr></Link>の基、<wbr />
                煮るなり焼くなり好きに使う事が出来ます。<wbr />
                是非ご活用下さい。
            </p>
            <ol className="cpp-entrance-index">
                <li><Link href="#">工事中...</Link></li>
            </ol>
            <style jsx>{`
                .cpp-entrance-index {
                    list-style: cjk-ideographic;
                }
            `}</style>
        </>
    );
}
