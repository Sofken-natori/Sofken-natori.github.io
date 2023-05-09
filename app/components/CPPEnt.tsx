'use strict';

import Link from 'next/link';
import { DOCUMENT_ROOT } from '../../lib/contants';
import { DefaultHead } from '.';
import type { ReactNode } from 'react';

export const cppEntPages = {
    dictionary: '単語集',
    type: 'データ型',
    variable: '変数',
    literal: 'リテラル',
    cast: '型キャスト',
    logical: '論理演算',
    conditional: '条件分岐',
    loop: 'ループ',
    function: '関数'
} as const;

export const cppEntHardPages = {
    class: 'クラス',
    enum: '列挙型',
    reference: 'ポインタ・参照型',
    bit: 'ビット演算'
} as const;

export type CppEntPages = typeof cppEntPages | typeof cppEntHardPages;

export type CppEntPageSlugs = keyof typeof cppEntPages | keyof typeof cppEntHardPages;

type Props = {
    children?: ReactNode,
    slug: CppEntPageSlugs
};

export function CPPEnt({ children, slug }: Props): JSX.Element {
    const name: string = cppEntPages[slug] as string ?? cppEntHardPages[slug];
    return (
        <>
            <h2>C++入門「{name}」</h2>
            {children ?? ''}
            <script async src={`${DOCUMENT_ROOT}/prism.js#${Date.now()}`} />
        </>
    );
}

export function CPPEntHead({ slug }: { slug: CppEntPageSlugs }): JSX.Element {
    const name: string = cppEntPages[slug] as string ?? cppEntHardPages[slug];
    return (
        <DefaultHead description={`C++入門の${name}です。`} path={`/cpp/${slug}`} title={`${name} - C++入門`} />
    );
}

export function CPPEntLink({ anchor, name, slug }: { anchor?: `#${string}`, name?: string, slug: CppEntPageSlugs }): JSX.Element {
    return (
        <Link href={`${DOCUMENT_ROOT}/cpp/${slug}${anchor ?? ''}`}>{name ?? cppEntPages[slug] ?? cppEntHardPages[slug]}</Link>
    );
}
