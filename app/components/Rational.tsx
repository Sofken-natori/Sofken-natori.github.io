'use strict';

import { DefaultHead } from '.';
import { padding } from '../../lib/utils';
import type { ReactNode } from 'react';

export const rationalPublishDates = {
    32: new Date(2018, 11, 12),
    33: new Date(2019, 11, 8),
    34: new Date(2020, 11, 8),
    35: new Date(2021, 10, 30),
    36: new Date(2022, 10, 30)
} as const;

type Props = {
    children?: ReactNode,
    pdfUrl?: string,
    vol: keyof typeof rationalPublishDates
};

export function Rational({ children, pdfUrl, vol }: Props): JSX.Element {
    const date: Date = rationalPublishDates[vol];
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();
    const publishDate = `${year}/${month}/${padding(day, '0', 2)}`;
    return (
        <>
            <h2>レーショナル({publishDate}発行)</h2>
            <p><small>Powered by PDF.js</small></p>
            <iframe className="rational" src={`/pdfjs/web/viewer.html?file=${pdfUrl ?? getRationalMedia(vol, `vol${vol}.pdf`)}`} title={`${vol + 1986}年発行 レーショナル 第${vol}号`} />
            {children}
        </>
    );
}

export function RationalHead({ vol }: { vol: keyof typeof rationalPublishDates }): JSX.Element {
    return (
        <DefaultHead description={`${vol + 1986}年発行のRational vol.${vol}の電子版です。`} path={`/rational/vol${vol}`} title={`Rational vol.${vol}(${vol + 1986})`} />
    );
}

export function getRationalMedia(vol: keyof typeof rationalPublishDates, name: string): string {
    return `/rational/vol${vol}/${name}`;
}
