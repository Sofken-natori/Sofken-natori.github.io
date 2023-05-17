'use strict';

import Link, { LinkProps } from 'next/link';
import { DefaultHead } from '.';
import type { AnchorHTMLAttributes, JSX, ReactNode, RefAttributes } from 'react';

/**
 * C++入門の入門(当社比)編のページ一覧
 */
export const cppEntPages = {
    dictionary: '単語集',
    type: 'データ型',
    variable: '変数',
    literal: 'リテラル',
    operator: '演算子',
    cast: '型キャスト',
    logical: '論理演算',
    conditional: '条件分岐',
    loop: 'ループ',
    function: '関数'
} as const;

/**
 * C++入門の上級編のぺージ一覧
 */
export const cppEntHardPages = {
    class: 'クラス',
    enum: '列挙型',
    reference: 'ポインタ・参照型',
    bit: 'ビット演算'
} as const;

/**
 * C++入門の入門(当社比)編のページ一覧の型
 */
export type CppEntPages = typeof cppEntPages | typeof cppEntHardPages;

/**
 * C++入門の上級編のぺージ一覧の型
 */
export type CppEntPageSlugs = keyof typeof cppEntPages | keyof typeof cppEntHardPages;

/**
 * C++入門ページのテンプレート
 * @param children ページ内容
 * @param slug 対応するページID
 * @return C++入門ページ
 */
export function CPPEnt({ children, slug }: { children?: ReactNode, slug: CppEntPageSlugs }): JSX.Element {
    const name: string = cppEntPages[slug] as string ?? cppEntHardPages[slug];
    return (
        <>
            <h2>C++入門「{name}」</h2>
            {children}
        </>
    );
}

/**
 * C++入門ページのヘッダ情報
 * @param slug 対応するページID
 * @return ヘッダ情報
 */
export function CPPEntHead({ slug }: { slug: CppEntPageSlugs }): JSX.Element {
    const name: string = cppEntPages[slug] as string ?? cppEntHardPages[slug];
    return (
        <DefaultHead description={`C++入門の${name}です。`} path={`/cpp/${slug}`} title={`${name} - C++入門`} />
    );
}

/**
 * C++入門ページへのリンク
 * @param anchor アンカー
 * @param name リンク文字列
 * @param slug 対応するページID
 * @param attr 属性
 * @return リンク要素
 */
export function CPPEntLink({ anchor, name, slug, ...attr }: { anchor?: `#${string}`, name?: string, slug: CppEntPageSlugs } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & Omit<LinkProps, 'href'> & RefAttributes<HTMLAnchorElement>): JSX.Element {
    return (
        <Link href={`/cpp/${slug}${anchor ?? ''}`} {...attr}>{name ?? cppEntPages[slug] ?? cppEntHardPages[slug]}</Link>
    );
}
