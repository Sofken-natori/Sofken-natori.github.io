'use strict';

import { C, CPPEnt, CPPEntLink, S } from '../../components';
import type { JSX, ReactNode } from 'react';

export default function CPPEntType(): JSX.Element {
    return (
        <CPPEnt slug="type">
            <p>
                データ型とは、<em>そのデータがどのようなデータであるかを決めた<S>種別</S></em>の事です。<br />
                基本的な物は大きく分けて<S>ブール代数(真偽値)</S>・<S>整数</S>・<S>小数</S>・<S>文字</S>・<S>文字列</S>・<S>配列</S>があり、<wbr />
                その中でも<S>整数</S>と<S>小数</S>は表せる数値の範囲が異なる物が複数あります。<wbr />
                (文字は<u>内部的には</u>最小サイズの<em>整数型</em>です)
            </p>
            <p>
                小数は表す方法が<em>2通り</em>あり、小数点の位置を<em>固定</em>して表す<S>固定小数点方式</S>、<wbr />
                <u>仮数部分と指数部分に分けて</u>小数点を<em>固定せずに</em>表す<S>浮動小数点方式</S>がありますが、<wbr />
                ほとんどの場合<S>浮動小数点方式</S>が使われています。<br />
                また、小数型は<u>実質的に</u>実数を表せる事から<S>実数型</S>と呼ばれます。
            </p>
            <p>
                また整数型・小数型(・文字型)は<em>符号の有無を指定する</em>事ができ、<wbr />
                符号<em>付き</em>なら<C>signed</C>、符号<em>無し</em>なら<C>unsigned</C>を型の<u>前後</u>に付けます。<br />
                指定がなければ全て<C>signed</C>として扱われる(gccの場合)ので(<C>signed</C>の出番は)無いです。<br />
                なお、符号無しの場合、符号用の1bitが空くため最大値が<u><S>2倍+1</S></u>になります。<wbr />
                (例：<C>char</C>の場合-128〜127→0〜255)
            </p>
            <p>
                整数型には更に<u>サイズが目で見て分かる物</u>もあり、<S>組み込みでは</S>こちらの方がよく使われます。<wbr />
                ただし<C>cstdint</C>をincludeする必要があります。<br />
                符号付き：<C>std::intN_t</C><br />
                符号無し：<C>std::uintN_t</C><br />
                (Nにはbit単位のサイズ(8・16・32・64)が入る)
            </p>
            <p>
                <S>C++23</S>からは<S>小数型にも</S>サイズが目で見て分かる物が追加されました。<wbr />
                <C>stdfloat</C>のincludeが必要です。<br />
                通常の浮動小数点数：<C>std::floatN_t</C><br />
                brain floating point数：<C>std::bfloat16_t</C><br />
                (Nにはbit単位のサイズ(16・32・64・128)が入る)<br />
                (brain floating pointはGPUなどが使っている形式で通常の物と比べて指数の領域が大きい＝精度を犠牲により大きい数字を表せる)
            </p>
            <h3>整数型</h3>
            <Entry name="char" range="-128〜127" size={1}>
                文字型ですが、組み込み開発では8bit整数型として使われる事が多いです。<wbr />
                ただ、半角モードのキーボードで打てる文字(ASCII文字と言う)以外は範囲外なので<wbr />
                別の文字型を使う必要があります(今回は一旦スルー)<br />
                <C>std::int8_t</C>相当。
            </Entry>
            <Entry name="short" range="-32768〜32767" size={2}>
                整数型で、<C>char</C>を除いた正真正銘の整数型の中では最小です。<wbr />
                組み込み以外ではあまり見かけない。気がする。<br />
                <C>std::int16_t</C>相当。
            </Entry>
            <Entry name="int・long" range="-2147483648〜2147483647(約21億)" size={4}>
                整数型で、多分最も使われてる型。gccの場合<C>int</C>と<C>long</C>は同じ。<wbr />
                プログラムにベタ書きした整数はこの型。<br />
                <C>std::int32_t</C>相当。
            </Entry>
            <Entry name="long long" range="-9223372036854775808〜9223372036854775807(約922京)" size={8}>
                整数型。何に使うのこんなサイズ。<br />
                <C>std::int64_t</C>相当。
            </Entry>
            <h3>実数型</h3>
            <Entry name="std::float16_t" range="不明" size={2}>
                実数型で、実数型の中では最小。<br />
                C++23で追加されたサイズ付き実数型の中でも別の表現が無い2つの型の一つ。
            </Entry>
            <Entry name="std::bfloat16_t" range="不明" size={2}>
                実数型で、同じく実数型の中では最小。<br />
                C++23で追加されたサイズ付き実数型の中でも別の表現が無い2つの型の一つ。<br />
                <C>std::float16_t</C>型に比べ、指数の領域が大きいため、より大きいデータを表せる。
            </Entry>
            <Entry name="float" range={<>-3.40282×10<sup>38</sup>〜3.40282×10<sup>38</sup>(約340澗)</>} size={4}>
                実数型で、実数型の中では最小。<br />
                <C>std::float32_t</C>相当。
            </Entry>
            <Entry name="double" range={<>-1.79769×10<sup>308</sup>〜1.79769×10<sup>308</sup></>} size={8}>
                実数型で、プログラムにベタ書きした実数はこの型。<br />
                <C>std::float64_t</C>相当。
            </Entry>
            <Entry name="long double" range={<>-1.18973×10<sup>4932</sup>〜1.18973×10<sup>4932</sup></>} size={16}>
                実数型。何に使うの16バイトも。<br />
                <C>std::float128_t</C>相当。
            </Entry>
            <h3 id="コンテナ">コンテナ</h3>
            <Entry name="std::string" range="0文字〜4611686018427387903文字(約5京文字)">
                文字列型。Cでは<C>char</C>の配列で表していましたがC++では専用の型が作られました。<wbr />
                相互変換可能。<C>string</C>のincludeが必要。
            </Entry>
            <Entry name="[]">
                配列。宣言時に<C>型名 変数名[]</C>とする。<wbr />
                実態は配列先頭のポインタ。
            </Entry>
            <Entry name="std::array">
                固定長配列。宣言時に<C>std::array&lt;型名, サイズ&gt; 変数名</C>とします。<wbr />
                より扱いやすくなった配列でサイズが固定です。<wbr />
                <C>array</C>のincludeが必要。
            </Entry>
            <Entry name="std::vector">
                可変長配列。宣言時に<C>std::vector&lt;型名&gt; 変数名</C>とします。<wbr />
                より扱いやすくなった配列でサイズが可変です。データを端から処理するのに向いています。<wbr />
                <C>vector</C>のincludeが必要。
            </Entry>
            <Entry name="std::list">
                可変長配列。宣言時に<C>std::list&lt;型名&gt; 変数名</C>とします。<wbr />
                より扱いやすくなった配列でサイズが可変です。データをランダムに抜き出して処理するのに向いています。<wbr />
                <C>list</C>のincludeが必要。
            </Entry>
            <h3 id="その他">その他</h3>
            <Entry name="bool" range="false・true">
                ブール型。論理的に偽なら<C>false</C>、真なら<C>true</C>。C・C++の場合内部的に整数値として扱われる。<wbr />
                (0が<C>false</C>、0以外が全て<C>true</C>となる。例として<C>stdbool.h</C>では<C>false</C>が<C>0</C>、<C>true</C>が<C>1</C>として定義されている)
            </Entry>
            <Entry name="void" size={0}>
                <CPPEntLink slug="function" />の返り値や型指定なしの<CPPEntLink name="ポインタ" slug="reference" />(メモリ内表現を保持する用途)のためだけに使います。<br />
                変数の型として使う事はできません。
            </Entry>
        </CPPEnt>
    );
}

function Entry({ children, name, range, size }: { children: ReactNode, name: string, range?: JSX.Element | string, size?: number }): JSX.Element {
    return (
        <>
            <h4 id={name}>{name}</h4>
            <p>
                {name}型は{range !== undefined ? <>表せる値が{range}、</> : ''}サイズが{size !== undefined ? `${size}Byte(${size * 8}bit)` : '可変'}の型です。
            </p>
            {children}
        </>
    );
}
