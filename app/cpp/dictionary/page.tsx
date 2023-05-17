/* eslint-disable quote-props */
'use strict';

import Link from 'next/link';
import styles from './style.module.scss';
import { C, CPPEnt, CPPEntLink, CppEntPageSlugs } from '../../components';
import type { JSX, ReactNode } from 'react';

type WordEntry = Readonly<{
    description: ReactNode,
    relations?: readonly CppEntPageSlugs[]
}>;

const words: Readonly<{ [word in string]: WordEntry }> = {
    'アドレス': {
        description: (
            <>
                この界隈においては大抵IPアドレスかメモリのアドレスを指す事がほとんど。<br />
                大体の解説書はそれぞれ、<br />
                インターネットにおける住所のような物<br />
                メモリにおける住所のような物<br />
                のように住所にやたら例えたがる。(そりゃ英語で「住所」だからね)
            </>
        ),
        relations: [
            'reference'
        ]
    },
    'クラス': {
        description: (
            <>
                <Word name="オブジェクト" />の設計図。
            </>
        ),
        relations: [
            'class'
        ]
    },
    'スコープ': {
        description: (
            <>
                その<Word name="変数" />が使える範囲。<wbr />
                具体的には宣言した所から先、その<Word name="ブロック" />を抜けるまで。
            </>
        )
    },
    'ソースコード': {
        description: (
            <>
                プログラムの内容を記述したデータの事。
            </>
        )
    },
    'データ型': {
        description: (
            <>
                <Word name="変数" />や<Word name="リテラル" />などのデータの種類を表す物。
            </>
        ),
        relations: [
            'type'
        ]
    },
    'ブロック': {
        description: (
            <>
                <C>{`{}`}</C>で囲まれている範囲。
            </>
        )
    },
    'リテラル': {
        description: (
            <>
                <Word name="ソースコード" />にベタ書きされたデータの事。
            </>
        ),
        relations: [
            'literal'
        ]
    },
    '変数': {
        description: (
            <>
                様々な値を保持しておく物。
            </>
        ),
        relations: [
            'variable'
        ]
    },
    '定数': {
        description: (
            <>
                値の書き換えが出来ない<Word name="変数" />。
            </>
        ),
        relations: [
            'variable'
        ]
    },
    '引数': {
        description: (
            <>
                プログラムや関数などに渡す、処理に必要な値。
            </>
        ),
        relations: [
            'function'
        ]
    },
    '真偽値': {
        description: (
            <>
                それが真(＝正しい)か偽(＝正しくない)かを表す値。<wbr />
                <Word name="変数" />の場合、変数名は疑問形となる場合が多い。<br />
                2極性からしばしばON/OFFとしても使われる。
            </>
        ),
        relations: [
            'conditional'
        ]
    },
    '返り値': {
        description: (
            <>
                <Word name="関数" />が返す値。
            </>
        ),
        relations: [
            'function'
        ]
    },
    '関数': {
        description: (
            <>
                処理をひとまとめにした物。
            </>
        ),
        relations: [
            'function'
        ]
    }
} as const;

export default function CPPEntDictionary(): JSX.Element {
    return (
        <CPPEnt slug="dictionary">
            <p>
                C++やプログラミング全般で使われる単語を集めました。<wbr />
                参照しながらの学習にご活用下さい。<br />
                単語はUnicode順で並べてあります。
            </p>
            <table className={styles['dictionary']}>
                <thead>
                    <tr>
                        <th>単語</th>
                        <th>意味</th>
                        <th>関連ページ</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        const strWords: string[] = [];
                        // eslint-disable-next-line guard-for-in
                        for(const word in words) strWords.push(word);
                        return strWords.sort().map(word => (
                            <Entry key={word} relations={words[word]?.relations?.map((rel, i) => <CPPEntLink key={`${word}-rel-${i}`} slug={rel} />) ?? []} word={word}>
                                {words[word]?.description}
                            </Entry>
                        ));
                    })()}
                </tbody>
            </table>
        </CPPEnt>
    );
}

function Entry({ children, relations, word }: { children: ReactNode, relations: JSX.Element[], word: string }): JSX.Element {
    return (
        <tr id={word}>
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

function Word({ name }: { name: keyof typeof words }): JSX.Element {
    return (
        <Link href={`#${name}`}>{name}</Link>
    );
}
