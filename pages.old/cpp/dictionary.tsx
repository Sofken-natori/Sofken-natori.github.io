'use strict';

import CPPEnt, { CPPEntLink } from '../../app/components/CPPEnt';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function CPPEntDictionary(): JSX.Element {
    return (
        <CPPEnt slug="dictionary">
            <p>
                C++やプログラミング全般で使われる単語を集めました。<wbr />
                参照しながらの学習にご活用下さい。<br />
                単語はUnicode順で並べてあります。
            </p>
            <table>
                <caption>単語集</caption>
                <thead>
                    <tr>
                        <th>単語</th>
                        <th>意味</th>
                        <th>関連ページ</th>
                    </tr>
                </thead>
                <tbody>
                    <Entry relations={[<CPPEntLink key="dic-rel-class-0" slug="class" />]} word="クラス">
                        <Word name="オブジェクト" />の設計図。
                    </Entry>
                    <Entry relations={[]} word="ソースコード">
                        プログラムの内容を記述したデータの事。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-literal-0" slug="literal" />]} word="リテラル">
                        <Word name="ソースコード" />にベタ書きされたデータの事。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-type-0" slug="type" />]} word="データ型">
                        <Word name="変数" />や<Word name="リテラル" />などのデータの種類を表す物。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-variable-0" slug="variable" />]} word="変数">
                        様々な値を保持しておく物。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-constant-0" slug="variable" />]} word="定数">
                        値の書き換えが出来ない<Word name="変数" />。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-parameter-0" slug="function" />]} word="引数">
                        プログラムや関数などに渡す、処理に必要な値。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-boolean-0" slug="conditional" />]} word="真偽値">
                        それが真(＝正しい)か偽(＝正しくない)かを表す値。<wbr />
                        <Word name="変数" />の場合、変数名は疑問形となる場合が多い。<br />
                        2極性からしばしばON/OFFとしても使われる。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-return-value-0" slug="function" />]} word="返り値">
                        関数が返す値。
                    </Entry>
                    <Entry relations={[<CPPEntLink key="dic-rel-function-0" slug="function" />]} word="関数">
                        処理をひとまとめにした物。
                    </Entry>
                </tbody>
            </table>
        </CPPEnt>
    );
}

function Entry({ children, relations, word }: { children: ReactNode, relations: JSX.Element[], word: string }): JSX.Element {
    return (
        <tr id={`#${word}`}>
            <td>{word}</td>
            <td>
                {children}
            </td>
            <td>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {relations.map((relation, i) => <li key={`dic-ent-${i}`} style={{ textAlign: 'center' }}>{relation}</li>)}
                </ul>
            </td>
        </tr>
    );
}

function Word({ name }: { name: string }): JSX.Element {
    return (
        <Link href={`#${name}`}>{name}</Link>
    );
}