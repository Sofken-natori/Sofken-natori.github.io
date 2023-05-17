'use strict';

import type { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react';

/**
 * strongタグの短縮ver.
 * @param children 内容
 * @param attr 属性
 * @return 太字の内容
 */
export function S({ children, ...attr }: { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>): JSX.Element {
    return (
        <strong {...attr}>{children}</strong>
    );
}

/**
 * 波線
 * @param children 内容
 * @param color 波線の色
 * @param attr 属性
 * @return 波線が引かれた内容
 */
export function WU({ children, color = 'hsl(0deg, 0%, 5%)', ...attr }: { children: ReactNode, color?: `hsl(${number}deg, ${number}%, ${number}%)` } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>): JSX.Element {
    return (
        <span style={{ textDecoration: `${color} wavy underline` }} {...attr}>{children}</span>
    );
}
