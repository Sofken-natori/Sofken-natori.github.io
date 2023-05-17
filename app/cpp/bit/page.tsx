'use strict';

import { C, CPPEnt, CPPEntLink, Code } from '../../components';
import type { JSX } from 'react';

export default function CPPEntBit(): JSX.Element {
    return (
        <CPPEnt slug="bit">
            <p>
                コンピューターは内部的には2進数を使っています。<wbr />
                そのため、様々な処理を行うより2進数を直に触った方が処理速度は速くなります。<br />
                そこで、bit単位で2進数を操作できる演算子の出番です。<br />
                ビットシフト以外はtrueを1、falseを0に置き換え各bitごとに行った<CPPEntLink slug="logical" />です。<br />
                軽い各ビット演算子の説明と実際の使いどころについて解説します。
            </p>
            <h3 id="AND">AND</h3>
            <p>
                各bitごとに<CPPEntLink anchor="#AND" name="AND演算" slug="logical" />を行います。<br />
                特定のbitを抽出する、いわゆるマスク処理に使われます。<br />
                記号は<C>&amp;</C>です。
            </p>
            <Code content={`
                // 例えば右から2進7桁の数値だけ抽出したい場合
                int a = 255 & 0b0111'1111;
                // 255は0b1111'1111で右から8桁目のみ「1 and 0」で0となるためaは127(0b0111'1111)
            `} indent={16} lang="cpp" />
            <h3 id="OR">OR</h3>
            <p>
                各bitごとに<CPPEntLink anchor="#OR" name="OR演算" slug="logical" />を行います。<br />
                フラグの合成に使われます。<br />
                記号は<C>|</C>です。
            </p>
            <Code content={`
                // フラグのサンプル
                enum class Flag {
                    RUN       = 0b0001,
                    WAIT      = 0b0010,
                    EMERGENCY = 0b0100
                }

                int a = static_cast&lt;int&gt;(Flag::RUN) | static_cast&lt;int&gt;(Flag::EMERGENCY);
                // aには5(0b0101)(0b0001 or 0b0100)が入る
            `} indent={16} lang="cpp" />
            <h3 id="XOR">XOR</h3>
            <p>
                各bitごとに<CPPEntLink anchor="#XOR・EOR・ExOR" name="XOR演算" slug="logical" />を行います。<br />
                特定のbitを反転させる場合に使います。<br />
                具体的には1を立てたbitが反転します。<br />
                記号は<C>^</C>です。
            </p>
            <Code content={`
                int a = 12; // 0b1100
                int b = a ^ 0b0110;
                // bには10(0b1010)が入る
            `} indent={16} lang="cpp" />
            <h3 id="NOT">NOT</h3>
            <p>
                各bitごとに<CPPEntLink anchor="#NOT" name="NOT演算" slug="logical" />を行います。<br />
                記号は<C>~</C>です。
            </p>
            <Code content={`
                int a = 5; // 0b0101
                int b = ~a;
                // bには-6(0b1111'1111'1111'1111'1111'1111'1111'1010)が入る
            `} indent={16} lang="cpp" />
            <h3 id="左シフト">左シフト</h3>
            <p>
                各bitを指定された数だけ左に移動します。<wbr />
                はみ出た部分は消滅し、空いた右側には0が代わりに入ります。<wbr />
                ただし、符号部分を保護したりもしないため、数によっては符号が反転します。<br />
                記号は<C>&lt;&lt;</C>です。
            </p>
            <Code content={`
                int a = 10; // 0b0000'1010
                int b = a << 3;
                // bには80(0b0101'0000)が入る
            `} indent={16} lang="cpp" />
            <h3 id="右シフト">右シフト</h3>
            <p>
                各bitを指定された数だけ右に移動します。<wbr />
                はみ出た部分は消滅し、空いた左側には0が代わりに入ります。<wbr />
                ただし、符号部分を保護したりもしないため、負の数は正の数になります。<br />
                記号は<C>&gt;&gt;</C>です。
            </p>
            <Code content={`
                int a = 11; // 0b1011
                int b = a >> 2;
                // bには2(0b0010)が入る
            `} indent={16} lang="cpp" />
        </CPPEnt>
    );
}
