'use strict';

import CPPEnt from '../../components/CPPEnt';
import Link from 'next/link';
import { DOCUMENT_ROOT } from '../../lib/contants';

export default function CPPEntVariable(): JSX.Element {
    return (
        <CPPEnt name="変数" slug="variable">
            <p>
                変数とは、様々な値を保持しておく物です。<wbr />
                例えば整数、小数、正しいか否か、文字列などが保持出来ますが、1つの変数では基本的に決めた1種類の物しか扱えません。
            </p>
            <p>
                変数の<Link href={`${DOCUMENT_ROOT}/cpp/type`}>型</Link>と名前を決める事を<strong>宣言</strong>と言います。
                <pre className="line-numbers">
                    <code className="language-cpp">
                        int a;
                        bool b;
                    </code>
                </pre>
            </p>
        </CPPEnt>
    );
}
