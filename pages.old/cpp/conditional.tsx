/* eslint-disable react/jsx-indent */
'use strict';

import CPPEnt from '../../app/components/CPPEnt';

export default function CPPEntConditional(): JSX.Element {
    return (
        <CPPEnt slug="conditional">
            <p>
                条件分岐は基礎的な構造の1つで、基本的には条件に合致するかどうかで処理を切り替えます。
            </p>
            <h3 id="if-else">if-else</h3>
            <p>
                最も基本的な条件分岐です。<wbr />
                それ故に後述するswitch-caseに比べ処理速度が速い傾向にあります。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    if(条件) &lbrace;
                        処理
                    &rbrase;
                </code>
            </pre>
            <p>
                「条件」欄に条件(最終的に真偽値として扱われる)を入れ、「処理」欄に条件を満たしていた場合の処理を記述します。
            </p>
            <h3 id="switch-case">switch-case</h3>
            <p>
                一つの変数の内容に応じて分岐するような条件分岐に向いています。<br />
                しかし、if-elseに比べ遅い事があります。(ただしコンパイラの最適化により同等の速度になる場合があります)
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    switch(変数) &lbrace;
                        case 値1:
                            処理1
                            break;
                        case 値2:
                            処理2
                            break;
                        .
                        .
                        .
                        default:
                            処理3
                            break;
                    &rbrace;
                </code>
            </pre>
            <p>
                「変数」欄に比較したい変数を入れ、「値1」に合致した場合の処理を「処理1」欄に、「値2」に合致した場合の処理を「処理2」欄にそれぞれ入れ(勿論同じように増やす事も減らす事も可能)、<wbr />
                どこにも合致しなかった場合の処理(必要ない場合はdefault以降をまるごと消す)を「処理3」にそれぞれ記述します。
            </p>
        </CPPEnt>
    );
}