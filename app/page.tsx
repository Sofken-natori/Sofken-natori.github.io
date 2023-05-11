'use strict';

import Link from 'next/link';
import { TwitterTimeline } from './components';
import Script from 'next/script';

export default function Home(): JSX.Element {
    return (
        <>
            <h2>2022年度のレーショナル</h2>
            <p>
                <Link href="/rational/vol36">こちら</Link>のページで見ることができます。(メニューからも行けます)<br />
                2022年の高専祭で公開したものと同じものです。ぜひご覧頂ければと思います。
            </p>
            <h2>ソフトウェア研究部会とは</h2>
            <p>
                ソフトウェア研究部会とは仙台高専名取キャンパスに籍を置く研究部会です。<br />
                ソフトウェア研究部会は，高専プロコンにおける上位入賞を主な目標に活動しています。<br />
                それぞれが自身でスケジュールを立て，競技プログラミングやゲーム制作，イラスト制作，楽曲制作，モデリングなど，プログラミングの勉強やパソコンを利用した創作活動を行っています。
            </p>
            <h2>部員の名前について</h2>
            <p>高専祭時に配布している印刷版では部員全員の本名を公開していますが、Web版では個人のプライバシーに配慮して非公開にしてほしい方の名前はハンドルネームにしています。</p>
            <h2>タイムライン</h2>
            <TwitterTimeline username="sofken_natori" />
            <Script async src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
        </>
    );
}
