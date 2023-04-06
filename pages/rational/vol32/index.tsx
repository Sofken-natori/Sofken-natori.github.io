'use strict';

import Head from 'next/head';
import styles from '../../../styles/components/Rational.module.scss';

export default function RationalVol32(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="2018年発行のRational vol.32の電子版です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/rational/vol32" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Rational vol.32(2018)" />
                <meta property="og:description" content="2018年発行のRational vol.32の電子版です。" />
                <title>Rational vol.32(2018) - ソフトウェア研究部会</title>
            </Head>
            <h2>レーショナル(2018/11/12発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className={styles['rationale']} src={`${process.env['ROOT']}/pdfjs/web/viewer.html?file=${process.env['ROOT']}/rational/vol32/vol32_ver2.pdf`} title="2018年発行 レーショナル 第32号" />
            <h2>楽曲</h2>
            <div className={styles['extraContents']}>
                <h3>Flicker composer:機械システム工学科 3年 木村竜輔</h3>
                <audio className={styles['audio']} controls>
                    <source src={`${process.env['ROOT']}/rational/vol32/Flicker-01.mp3`} type="audio/mpeg" />
                </audio>
                <h3>星海航路 composer:機械システム工学科 3年 hysk</h3>
                <audio className={styles['audio']} controls>
                    <source src={`${process.env['ROOT']}/rational/vol32/星海航路.mp3`} type="audio/mpeg" />
                </audio>
            </div>
        </>
    );
}
