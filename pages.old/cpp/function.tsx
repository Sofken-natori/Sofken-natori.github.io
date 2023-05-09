/* eslint-disable react/jsx-indent */
'use strict';

import CPPEnt, { CPPEntLink } from '../../app/components/CPPEnt';

export default function CPPEntFunction(): JSX.Element {
    return (
        <CPPEnt slug="function">
            <p>
                関数とは、ある程度の処理をひとまとめにしたり、<wbr />
                パッと見て分かりにくい処理に名前を付けて分かりやすくするための物です。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    返り値の型 関数名(引数1の型 引数1, 引数2の型 引数2, ...) &lbrace;
                        処理
                    &rbrace;
                </code>
            </pre>
            <p>
                関数名は基本的にunder_score記法かcamelCase記法で命名される事が多いです。<wbr />
                (C言語にはunder_scoreが多いがその他の主要言語ではcamelCaseが多い)
            </p>
            <p>
                返り値の型は、返り値を返さない関数の場合、<CPPEntLink anchor="#void" name="void型" slug="type" />を指定してやります。<br />
                かつて昔のC言語では引数がない場合も引数欄に<CPPEntLink anchor="#void" name="void" slug="type" />と書く必要がありましたが<wbr />
                現在はC言語・C++共に不要となりました。(have not)
            </p>
            <p>
                返り値を返す関数の場合、処理の末端(つまり最低でも一番下に1つ)にreturn文を用いて値を返す必要があります。<br />
                必ず一番下である必要はなく、関数先頭で<CPPEntLink anchor="#if-else" name="if文" slug="conditional" />を使い諸々の処理の前に値を返す事も可能です。<br />
                return文は<span className="inline-code">return 値;</span>と言う形式で書きます。
            </p>
        </CPPEnt>
    );
}
