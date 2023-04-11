'use strict';

import Head from 'next/head';
import Script from 'next/script';
import { DOCUMENT_ROOT } from '../../lib/contants';

export default function CPPEntType() : JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="C++のデータ型の入門です。" />
                <meta property="og:url" content="https://sofken-natori.github.io/cpp/type" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="データ型 - C++入門" />
                <meta property="og:description" content="C++のデータ型の入門です。" />
                <title>データ型 - C++入門 - ソフトウェア研究部会</title>
            </Head>
            <h2>C++入門「データ型」</h2>
            <p>
                データ型とは、そのデータがどのようなデータであるかを決めた種別の事です。<br />
                基本的な物は大きく分けてブール(真偽値)・整数・小数・文字・文字列・配列があり、<wbr />
                その中でも整数と小数は表せる数値の範囲が異なる物が複数あります。<wbr />
                (文字は内部的には最小サイズの整数型です)
            </p>
            <p>
                小数は表す方法が2通りあり、小数点の位置を固定して表す固定小数点方式、<wbr />
                仮数部分と指数部分に分けて小数点を固定しない浮動小数点方式がありますが<wbr />
                ほとんどの場合浮動小数点方式が使われています。<br />
                また、小数型は実質的に実数を表せる事から実数型と呼ばれます。
            </p>
            <p>
                また整数型・小数型(・文字型)は符号の有無を指定する事ができ、<wbr />
                符号付きなら<span className="inline-code">signed</span>、符号無しなら<span className="inline-code">unsigned</span>を型の前後に付けます。<br />
                指定がなければ全てsignedとして扱われる(gccの場合)ので(signedの出番は)無いです。<br />
                なお、符号無しの場合、符号用の1bitが空くため最大値が2倍+1になります。<wbr />
                (例：charの場合-128〜127→0〜255)
            </p>
            <p>
                整数型には更にサイズが目で見て分かる物もあり、組み込みではこちらの方がよく使われます。<wbr />
                ただしcstdintをincludeする必要があります。<br />
                符号付き：<span className="inline-code">std::intN_t</span><br />
                符号無し：<span className="inline-code">std::uintN_t</span><br />
                (Nにはbit単位のサイズ(8・16・32。64)が入る)
            </p>
            <p>
                C++23からは小数型にもサイズが目で見て分かる物が追加されました。<wbr />
                stdfloatのincludeが必要です。<br />
                通常の浮動小数点数：<span className="inline-code">std::floatN_t</span><br />
                brain floating point数：<span className="inline-code">std::bfloat16_t</span><br />
                (Nにはbit単位のサイズ(16・32・64・128)が入る)<br />
                (brain floating pointはGPUなどが使っている形式で通常の物と比べて指数の領域が大きい)
            </p>
            <table>
                <caption>基本的なデータ型(gccの場合)</caption>
                <thead>
                    <tr>
                        <th>型名</th>
                        <th>サイズ(バイト)</th>
                        <th>表せる範囲</th>
                        <th>説明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>char</td>
                        <td>1</td>
                        <td>-128〜127</td>
                        <td>
                            文字型。組み込み開発では8bit整数型として使われる事が多い。<wbr />
                            ただ、半角モードのキーボードで打てる文字(ASCII文字と言う)以外は範囲外なので<wbr />
                            別の文字型を使う必要がある(今回は一旦スルー)<br />
                            <span className="inline-code">std::int8_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>short</td>
                        <td>2</td>
                        <td>-32768〜32767</td>
                        <td>
                            整数型。charを除いた正真正銘の整数型の中では最小。組み込み以外ではあまり見かけない。気がする。<br />
                            <span className="inline-code">std::int16_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>int・long</td>
                        <td>4</td>
                        <td>-2147483648〜2147483647(約21億)</td>
                        <td>
                            整数型。多分最も使われてる型。gccの場合intとlongは同じ。プログラムにベタ書きした整数はこの型。<br />
                            <span className="inline-code">std::int32_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>long long</td>
                        <td>8</td>
                        <td>-9223372036854775808〜9223372036854775807(約922京)</td>
                        <td>
                            整数型。何に使うのこんなサイズ。<br />
                            <span className="inline-code">std::int64_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>float</td>
                        <td>4</td>
                        <td>-3.40282&times;10<sup>38</sup>〜3.40282&times;10<sup>38</sup>(約340澗)</td>
                        <td>
                            実数型。実数型の中では最小。<br />
                            <span className="inline-code">std::float32_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>double</td>
                        <td>8</td>
                        <td>-1.79769&times;10<sup>308</sup>〜1.79769&times;10<sup>308</sup></td>
                        <td>
                            実数型。プログラムにベタ書きした実数はこの型。<br />
                            <span className="inline-code">std::float64_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>long double</td>
                        <td>16</td>
                        <td>-1.18973&times;10<sup>4932</sup>〜1.18973&times;10<sup>4932</sup></td>
                        <td>
                            実数型。何に使うの16バイトも。<br />
                            <span className="inline-code">std::float128_t</span>相当。
                        </td>
                    </tr>
                    <tr>
                        <td>bool</td>
                        <td>1</td>
                        <td>false・true</td>
                        <td>
                            ブール型。論理的に偽ならfalse、真ならtrue。C・C++の場合内部的に整数値として扱われる。<wbr />
                            (0がfalse、0以外が全てtrueとなる。例としてstdbool.hではfalseが0、trueが1として定義されている)
                        </td>
                    </tr>
                    <tr>
                        <td>std::string</td>
                        <td>可変</td>
                        <td>0文字〜4611686018427387903文字(約5京文字)</td>
                        <td>
                            文字列型。Cではcharの配列で表していたがC++では専用の型が作られた。<wbr />
                            相互変換可能。stringのincludeが必要。
                        </td>
                    </tr>
                    <tr>
                        <td>[]</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            配列。宣言時に<span className="inline-code">型名 変数名[]</span>とする。<wbr />
                            実態は配列先頭のポインタ。
                        </td>
                    </tr>
                    <tr>
                        <td>std::array</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            固定長配列。宣言時に<span className="inline-code">std::array&lt;型名, サイズ&gt; 変数名</span>とする。<wbr />
                            より扱いやすくなった配列でサイズが固定。<wbr />
                            arrayのincludeが必要。
                        </td>
                    </tr>
                    <tr>
                        <td>std::vector</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            可変長配列。宣言時に<span className="inline-code">std::vector&lt;型名&gt; 変数名</span>とする。<wbr />
                            より扱いやすくなった配列でサイズが可変。データを端から処理するのに向いている。<wbr />
                            vectorのincludeが必要。
                        </td>
                    </tr>
                    <tr>
                        <td>std::list</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            可変長配列。宣言時に<span className="inline-code">std::list&lt;型名&gt; 変数名</span>とする。<wbr />
                            より扱いやすくなった配列でサイズが可変。データをランダムに抜き出して処理するのに向いている。<wbr />
                            listのincludeが必要。
                        </td>
                    </tr>
                </tbody>
            </table>
            <Script async src={`${DOCUMENT_ROOT}/prism.js`} strategy="lazyOnload" />
        </>
    );
}
