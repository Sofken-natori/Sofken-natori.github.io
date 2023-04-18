'use strict';

import Head from 'next/head';
import Script from 'next/script';
import { DOCUMENT_ROOT } from '../lib/contants';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode,
    name: string,
    slug: string
};

export default function CPPEnt({ children, name, slug }: Props): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content={`C++入門の${name}です。`} />
                <meta property="og:url" content={`https://sofken-natori.github.io/cpp/${slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${name} - C++入門`} />
                <meta property="og:description" content={`C++入門の${name}です。`} />
                <title>{name} - C++入門 - ソフトウェア研究部会</title>
            </Head>
            <h2>C++入門「{name}」</h2>
            {children ?? ''}
            <Script async src={`${DOCUMENT_ROOT}/prism.js`} strategy="lazyOnload" />
        </>
    );
}
