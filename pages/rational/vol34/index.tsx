'use strict';

import Head from 'next/head';
import { DOCUMENT_ROOT } from '../../../lib/contants';

export default function RationalVol34(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="2020年発行のRational vol.34の電子版です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/rational/vol34" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Rational vol.34(2020)" />
                <meta property="og:description" content="2020年発行のRational vol.34の電子版です。" />
                <title>Rational vol.34(2020) - ソフトウェア研究部会</title>
            </Head>
            <h2>レーショナル(2020/11/08発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className="rational" src={`${DOCUMENT_ROOT}/pdfjs/web/viewer.html?file=${DOCUMENT_ROOT}/rational/vol34/vol34.pdf`} title="2020年発行 レーショナル 第34号" />
            <h2>楽曲</h2>
            <div className="extra-contents">
                <h3>メルト_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={`${DOCUMENT_ROOT}/rational/vol34/メルト_きりたん.mp3`} type="audio/mpeg" />
                </audio>
                <h3>いつも何度でも_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={`${DOCUMENT_ROOT}/rational/vol34/いつも何度でも_きりたん.mp3`} type="audio/mpeg" />
                </audio>
                <h3>友～旅立ちの時～_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={`${DOCUMENT_ROOT}/rational/vol34/友～旅立ちの時～_きりたん.mp3`} type="audio/mpeg" />
                </audio>
                <h3>時間のない〇〇 composer: RT2 yiu</h3>
                <audio className="audio" controls>
                    <source src={`${DOCUMENT_ROOT}/rational/vol34/時間のない〇〇.mp3`} type="audio/mpeg" />
                </audio>
            </div>
        </>
    );
}
