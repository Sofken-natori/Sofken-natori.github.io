'use strict';

import Head from 'next/head';
import styles from '../../../styles/components/Rational.module.scss';

export default function RationalVol36(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="2022年発行のRational vol.36の電子版です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/rational/vol36" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Rational vol.36(2022)" />
                <meta property="og:description" content="2022年発行のRational vol.36の電子版です。" />
                <title>Rational vol.36(2022) - ソフトウェア研究部会</title>
            </Head>
            <h2>レーショナル(2022/10/30発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className={styles['rationale']} src={`${process.env['ROOT']}/pdfjs/web/viewer.html?file=${process.env['ROOT']}/rational/vol36/vol36.pdf`} title="2022年発行 レーショナル 第36号" />
        </>
    );
}
