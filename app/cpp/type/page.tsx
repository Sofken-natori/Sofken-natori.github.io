'use strict';

import { C, CPPEnt, CPPEntLink } from '../../components';

export default function CPPEntType(): JSX.Element {
    return (
        <CPPEnt slug="type">
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
                符号付きなら<C>signed</C>、符号無しなら<C>unsigned</C>を型の前後に付けます。<br />
                指定がなければ全てsignedとして扱われる(gccの場合)ので(signedの出番は)無いです。<br />
                なお、符号無しの場合、符号用の1bitが空くため最大値が2倍+1になります。<wbr />
                (例：charの場合-128〜127→0〜255)
            </p>
            <p>
                整数型には更にサイズが目で見て分かる物もあり、組み込みではこちらの方がよく使われます。<wbr />
                ただしcstdintをincludeする必要があります。<br />
                符号付き：<C>std::intN_t</C><br />
                符号無し：<C>std::uintN_t</C><br />
                (Nにはbit単位のサイズ(8・16・32。64)が入る)
            </p>
            <p>
                C++23からは小数型にもサイズが目で見て分かる物が追加されました。<wbr />
                stdfloatのincludeが必要です。<br />
                通常の浮動小数点数：<C>std::floatN_t</C><br />
                brain floating point数：<C>std::bfloat16_t</C><br />
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
                    <tr id="char">
                        <td>char</td>
                        <td>1</td>
                        <td>-128〜127</td>
                        <td>
                            文字型。組み込み開発では8bit整数型として使われる事が多い。<wbr />
                            ただ、半角モードのキーボードで打てる文字(ASCII文字と言う)以外は範囲外なので<wbr />
                            別の文字型を使う必要がある(今回は一旦スルー)<br />
                            <C>std::int8_t</C>相当。
                        </td>
                    </tr>
                    <tr id="short">
                        <td>short</td>
                        <td>2</td>
                        <td>-32768〜32767</td>
                        <td>
                            整数型。charを除いた正真正銘の整数型の中では最小。組み込み以外ではあまり見かけない。気がする。<br />
                            <C>std::int16_t</C>相当。
                        </td>
                    </tr>
                    <tr id="int・long">
                        <td>int・long</td>
                        <td>4</td>
                        <td>-2147483648〜2147483647(約21億)</td>
                        <td>
                            整数型。多分最も使われてる型。gccの場合intとlongは同じ。プログラムにベタ書きした整数はこの型。<br />
                            <C>std::int32_t</C>相当。
                        </td>
                    </tr>
                    <tr id="long long">
                        <td>long long</td>
                        <td>8</td>
                        <td>-9223372036854775808〜9223372036854775807(約922京)</td>
                        <td>
                            整数型。何に使うのこんなサイズ。<br />
                            <C>std::int64_t</C>相当。
                        </td>
                    </tr>
                    <tr id="float">
                        <td>float</td>
                        <td>4</td>
                        <td>-3.40282&times;10<sup>38</sup>〜3.40282&times;10<sup>38</sup>(約340澗)</td>
                        <td>
                            実数型。実数型の中では最小。<br />
                            <C>std::float32_t</C>相当。
                        </td>
                    </tr>
                    <tr id="double">
                        <td>double</td>
                        <td>8</td>
                        <td>-1.79769&times;10<sup>308</sup>〜1.79769&times;10<sup>308</sup></td>
                        <td>
                            実数型。プログラムにベタ書きした実数はこの型。<br />
                            <C>std::float64_t</C>相当。
                        </td>
                    </tr>
                    <tr id="long double">
                        <td>long double</td>
                        <td>16</td>
                        <td>-1.18973&times;10<sup>4932</sup>〜1.18973&times;10<sup>4932</sup></td>
                        <td>
                            実数型。何に使うの16バイトも。<br />
                            <C>std::float128_t</C>相当。
                        </td>
                    </tr>
                    <tr id="bool">
                        <td>bool</td>
                        <td>1</td>
                        <td>false・true</td>
                        <td>
                            ブール型。論理的に偽ならfalse、真ならtrue。C・C++の場合内部的に整数値として扱われる。<wbr />
                            (0がfalse、0以外が全てtrueとなる。例としてstdbool.hではfalseが0、trueが1として定義されている)
                        </td>
                    </tr>
                    <tr id="void">
                        <td>void</td>
                        <td>0</td>
                        <td>(無し)</td>
                        <td>
                            <CPPEntLink slug="function" />の返り値や型指定なしの<CPPEntLink name="ポインタ" slug="reference" />(メモリ内表現を保持する用途)のためだけに使います。<br />
                            変数の型として使う事はできません。
                        </td>
                    </tr>
                    <tr id="std::string">
                        <td>std::string</td>
                        <td>可変</td>
                        <td>0文字〜4611686018427387903文字(約5京文字)</td>
                        <td>
                            文字列型。Cではcharの配列で表していたがC++では専用の型が作られた。<wbr />
                            相互変換可能。stringのincludeが必要。
                        </td>
                    </tr>
                    <tr id="[]">
                        <td>[]</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            配列。宣言時に<C>型名 変数名[]</C>とする。<wbr />
                            実態は配列先頭のポインタ。
                        </td>
                    </tr>
                    <tr id="std::array">
                        <td>std::array</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            固定長配列。宣言時に<C>std::array&lt;型名, サイズ&gt; 変数名</C>とする。<wbr />
                            より扱いやすくなった配列でサイズが固定。<wbr />
                            arrayのincludeが必要。
                        </td>
                    </tr>
                    <tr id="std::vector">
                        <td>std::vector</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            可変長配列。宣言時に<C>std::vector&lt;型名&gt; 変数名</C>とする。<wbr />
                            より扱いやすくなった配列でサイズが可変。データを端から処理するのに向いている。<wbr />
                            vectorのincludeが必要。
                        </td>
                    </tr>
                    <tr id="std::list">
                        <td>std::list</td>
                        <td>可変</td>
                        <td>-</td>
                        <td>
                            可変長配列。宣言時に<C>std::list&lt;型名&gt; 変数名</C>とする。<wbr />
                            より扱いやすくなった配列でサイズが可変。データをランダムに抜き出して処理するのに向いている。<wbr />
                            listのincludeが必要。
                        </td>
                    </tr>
                </tbody>
            </table>
        </CPPEnt>
    );
}
