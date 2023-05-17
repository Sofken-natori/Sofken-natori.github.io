'use strict';

import { CPPEnt, CPPEntLink, Code } from '../../components';
import type { JSX } from 'react';

export default function CPPEntOperator(): JSX.Element {
    return (
        <CPPEnt slug="operator">
            <p>
                計算をする時に使う「+」「−」などはもちろん同じ用途でC++にも存在します。<br />
                論理演算子は<CPPEntLink name="こちら" slug="logical" />、ビット演算子は<CPPEntLink name="こちら" slug="bit" />で紹介しています。<br />
                そのため、それ以外の算術演算子と比較演算子、代入演算子について解説します。
            </p>
            <h3 id="算術演算子">算術演算子</h3>
            <p>
                いわゆる四則演算(+除算の余り)です。
            </p>
            <h4 id="加算">加算</h4>
            <p>
                加算です。左右の値を足し合わせます。文字列の場合は左の文字列の後ろに右の文字列を結合します。
            </p>
            <Code content={`
                int a = 2 + 2; // 4(5ではない)
                std::string b = "大きい" + "兄弟"; // "大きい兄弟"
            `} indent={16} lang="cpp" />
            <h4 id="減算">減算</h4>
            <p>
                減算です。左の値から右の値を引きます。
            </p>
            <Code content={`
                int a = 10 - 6; // 4
            `} indent={16} lang="cpp" />
            <h4 id="乗算">乗算</h4>
            <p>
                乗算です。左右の値を掛け合わせます。記号は×の代わりに*を使います。
            </p>
            <Code content={`
                int a = 2 * 32; // 64
            `} indent={16} lang="cpp" />
            <h4 id="除算">除算</h4>
            <p>
                除算です。左の値を右の値で割ります。実数型であれば小数、整数型であれば小数点以下切り捨ての値が返されます。<wbr />
                記号は÷の代わりに/を使います。
            </p>
            <Code content={`
                double a = 5 / 3; // 1
                double b = 5.0 / 3; // 1.66667
            `} indent={16} lang="cpp" />
            <h4 id="剰余">剰余</h4>
            <p>
                除算の余りです。左の値を右も値で割った余りです。記号は%を使います。
            </p>
            <Code content={`
                int a = 1 % 3; // 1
                int b = 5 % 3; // 2
                bool c = a % 2 == 0; // 応用例。a÷2の余りが0、つまり偶数であるかを判別出来る。この場合false
            `} indent={16} lang="cpp" />
            <h3 id="比較演算子">比較演算子</h3>
            <p>
                左右の値を比較して内容に応じて真偽値を返します。
            </p>
            <h4 id="等価演算子">等価演算子</h4>
            <p>
                左右の値が等しいと判定できる場合trueになります。大抵は左右の値が同じであればtrueです。<br />
                要するに数学などにおける「=」ですが、後述の代入演算子との兼ね合いもあり記号は==です。
            </p>
            <Code content={`
                int a = 15;
                int b = 0x0f; // 10進15
                bool c = a == b; // 15と0x0fは等しいためtrue
            `} indent={16} lang="cpp" />
            <h4 id="不等価演算子">不等価演算子</h4>
            <p>
                左右の値が等しくないと判定出来る場合trueになります。等価演算子の逆です。<br />
                要するに数学などにおける「≠」ですが、記号は!=です。
            </p>
            <Code content={`
                int a = 127;
                int b = 0x7f; // 10進127
                bool c = a != b; // 127と0x7fは等しいためfalse
            `} indent={16} lang="cpp" />
            <h4 id="小なり">小なり</h4>
            <p>
                左の値が右の値より小さい場合trueになります。要するに数学などにおける「&lt;」です。
            </p>
            <Code content={`
                int a = 48;
                int b = 192;
                bool c = a < b; // 48は192より小さい(「48 < 192」が正しい)ためtrue
            `} indent={16} lang="cpp" />
            <h4 id="大なり">大なり</h4>
            <p>
                左の値が右の値より大きい場合trueになります。要するに数学などにおける「&gt;」です。<br />
                ですが、プログラマーによっては小なりに統一している場合もあるため注意が必要です。(私もその一人だったり)
            </p>
            <Code content={`
                int a = 168;
                int b = 96;
                bool c = a > b; // 168は96より大きい(「168 > 96」が正しい)ためtrue
            `} indent={16} lang="cpp" />
            <h4 id="小なりイコール">小なりイコール</h4>
            <p>
                小なりに加え等価演算子の機能も兼ね備えた演算子です。<br />
                要するに数学などにおける「≦」ですが、記号は&lt;=です。
            </p>
            <Code content={`
                int a = 64;
                int b = 64;
                bool c = a <= b; // 「64 ≦ 64」が正しいためtrue
                b = 128;
                c = a <= b; // 「64 ≦ 128」が正しいためtrue
            `} indent={16} lang="cpp" />
            <h4 id="大なりイコール">大なりイコール</h4>
            <p>
                大なりに加え等価演算子の機能も兼ね備えた演算子です。<br />
                要するに数学などにおける「≧」ですが、記号は&gt;=です。
            </p>
            <Code content={`
                int a = 48;
                int b = 96;
                bool c = a >= b; // 「48 ≧ 96」が正しくないためfalse
                b = 48;
                c = a >= b; // 「48 ≧ 48」が正しいためtrue
            `} indent={16} lang="cpp" />
        </CPPEnt>
    );
}
