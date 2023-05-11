'use strict';

import { CPPEnt, CPPEntLink, Code } from '../../components';
import type { JSX } from 'react';

export default function CPPEntVariable(): JSX.Element {
    return (
        <CPPEnt slug="variable">
            <p>
                変数とは、様々な値を保持しておく物です。<wbr />
                例えば整数、小数、正しいか否か、文字列などが保持出来ますが、1つの変数では基本的に決めた1種類の物しか扱えません。
            </p>
            <p>
                変数の<CPPEntLink slug="type" />と名前を決める事を<strong>宣言</strong>と言います。
            </p>
            <Code content={
                `int a;\n` +
                `bool b;`
            } lang="cpp" />
            <p>
                変数に値を入れる事を<strong>代入</strong>と言います。
            </p>
            <Code content={
                `a = 10;\n` +
                `b = true;`
            } lang="cpp" />
        </CPPEnt>
    );
}
