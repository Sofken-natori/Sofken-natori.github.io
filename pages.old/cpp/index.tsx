'use strict';

import Head from 'next/head';
import { CPPEntLink, cppEntHardPages, cppEntPages, CppEntPages, CppEntPageSlugs } from '../../app/components/CPPEnt';

export default function CPPEntHome(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="C++入門の目次です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/cpp" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="目次 - C++入門" />
                <meta property="og:description" content="C++入門の目次です。" />
                <title>目次 - C++入門 - ソフトウェア研究部会</title>
            </Head>
            <h2>C++入門</h2>
            <p>
                C++入門にようこそ！<br />
                このC++入門は以前から部内で継承されていた「C++講習会」を少し修正した上で一般公開した物です。<br />
                基本的に書いてある文章は<a href="https://www.gnu.org/licenses/fdl-1.3.html"><abbr title="GNU Free Document License, Version 1.3">GNU FDL 1.3</abbr></a><wbr />
                および<a href="https://creativecommons.org/licenses/by-sa/4.0"><abbr title="Creative Commons Attribution-ShareAlike 4.0 International">CC BY-SA 4.0</abbr></a>の基、<wbr />
                煮るなり焼くなり好きに使う事が出来ます。<wbr />
                是非ご活用下さい。
            </p>
            <div>
                <strong style={{ fontSize: '1.2', fontWeight: 'bold' }}>注意</strong>
                このC++入門は特に記載のない限りC++11で動作します。それ以前のバージョンでの動作は保証出来ません。<wbr />
                予めご了承下さい。
            </div>
            <h3>入門(当社比)編</h3>
            <CPPEntPageList pages={cppEntPages} />
            <h3>上級編</h3>
            <CPPEntPageList pages={cppEntHardPages} />
            <style jsx>{`
                .cpp-entrance-index {
                    list-style: cjk-ideographic;
                }
            `}</style>
        </>
    );
}

function CPPEntPageList({ pages }: { pages: CppEntPages }): JSX.Element {
    const items: JSX.Element[] = [];
    // eslint-disable-next-line guard-for-in
    for(const page in pages) items.push(<li><CPPEntLink slug={page as CppEntPageSlugs} /></li>);
    return (
        <ol className="cpp-entrance-index">{items}</ol>
    );
}