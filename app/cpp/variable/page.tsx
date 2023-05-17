'use strict';

import { CPPEnt, CPPEntLink, Code, S } from '../../components';
import type { JSX } from 'react';

export default function CPPEntVariable(): JSX.Element {
    return (
        <CPPEnt slug="variable">
            <p>
                変数とは、<em>様々な値を<S>保持</S>しておく物</em>です。<wbr />
                例えば<u>整数</u>、<u>小数</u>、<u>正しいか否か</u>、<u>文字列</u><em>など</em>が保持出来ますが、1つの変数では基本的に決めた1種類の物しか扱えません。
            </p>
            <h3 id="宣言">宣言</h3>
            <p>
                変数の<CPPEntLink slug="type" />と名前を決める事を<S>宣言</S>と言います。
            </p>
            <Code content={`
                int a;
                bool b;
            `} indent={16} lang="cpp" />
            <h3 id="代入">代入</h3>
            <p>
                変数に値を入れる事を<S>代入</S>と言います。
            </p>
            <Code content={`
                a = 10;
                b = true;
                // 宣言と代入は同時に行う事が出来る
                double c = 1.1;
            `} indent={16} lang="cpp" />
        </CPPEnt>
    );
}
