'use strict';

import Head from 'next/head';
import styles from '../../../styles/components/Rational.module.scss';

export default function RationalVol33(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="2019年発行のRational vol.33の電子版です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/rational/vol33/" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Rational vol.33(2019)" />
                <meta property="og:description" content="2019年発行のRational vol.33の電子版です。" />
                <title>Rational vol.33(2019) - ソフトウェア研究部会</title>
            </Head>
            <h2>レーショナル(2019/11/08発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className={styles['rationale']} src={`${process.env['ROOT']}/pdfjs/web/viewer.html?file=${process.env['ROOT']}/rational/vol33/vol33.pdf`} title="2019年発行 レーショナル 第33号" />
            <h2>楽曲</h2>
            <div className={styles['extraContents']}>
                <h3>OverThere  composer:機械システム工学科 4年 hysk</h3>
                <audio className={styles['audio']} controls>
                    <source src={`${process.env['ROOT']}/rational/vol33/OverThere_hysk_PM4.mp3`} type="audio/mpeg" />
                </audio>
                <h3>手探り  composer:総合工学科II類 1年 yiu</h3>
                <audio className={styles['audio']} controls>
                    <source src={`${process.env['ROOT']}/rational/vol33/手探り_yiu_2類.mp3`} type="audio/mpeg" />
                </audio>
            </div>
        </>
    );
}
