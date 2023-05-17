'use strict';

import type { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react';

export type Language = 'c' | 'clike' | 'cpp';

/**
 * インラインコードブロック
 * @param children コード
 * @param attr 属性
 * @return 要素
 */
export function C({ children, ...attr }: { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>): JSX.Element {
    return (
        <span className="inline-code" {...attr}>{children}</span>
    );
}

/**
 * コードブロック
 * @param content コード
 * @param indent インデントオフセット
 * @param lang 言語
 * @param attr 属性
 * @return 要素
 */
export function Code({ content, indent, lang, ...attr }: { content: string, indent: number, lang: Language } & DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>): JSX.Element {
    return (
        <pre className="line-numbers" style={{ margin: 0 }} {...attr}>
            <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: content.split('\n').map(v => v.slice(indent)).join('\n').slice(1) }} />
        </pre>
    );
}
