'use strict';

import Head from 'next/head';
import styles from '../../../styles/components/Rational.module.scss';

export default function RationalVol35(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="2021年発行のRational vol.35の電子版です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/rational/vol35" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Rational vol.35(2021)" />
                <meta property="og:description" content="2021年発行のRational vol.35の電子版です。" />
                <title>Rational vol.35(2021) - ソフトウェア研究部会</title>
            </Head>
            <h2>レーショナル(2021/10/30発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className={styles['rationale']} src={`${process.env['ROOT']}/pdfjs/web/viewer.html?file=${process.env['ROOT']}/rational/vol35/vol35.pdf`} title="2021年発行 レーショナル 第35号" />
        </>
    );
}
