'use strict';

import type { JSX } from 'react';

export function Header(): JSX.Element {
    return (
        <header className="header">
            <p><abbr title="Software Research and Development Group">S.R.D.G.</abbr> ソフトウェア研究部会</p>
        </header>
    );
}
