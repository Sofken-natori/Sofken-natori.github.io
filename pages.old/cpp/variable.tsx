'use strict';

import CPPEnt, { CPPEntLink } from '../../app/components/CPPEnt';

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
            <pre className="line-numbers">
                <code className="language-cpp">
                    int a;
                    bool b;
                </code>
            </pre>
            <p>
                変数に値を入れる事を<strong>代入</strong>と言います。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    a = 10;
                    b = true;
                </code>
            </pre>
        </CPPEnt>
    );
}
