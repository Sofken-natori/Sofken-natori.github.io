'use strict';

import Link from 'next/link';
import type { JSX } from 'react';

export default function NotFound(): JSX.Element {
    return (
        <>
            <h2>404 - Not Found</h2>
            <p>
                指定されたページが存在しません。<br />
                <a href="mailto:sofken.natori@gmail.com">こちら</a>までご一報頂けるとありがたいです。<br />
                <Link href="/">トップに戻る</Link>
            </p>
        </>
    );
}
