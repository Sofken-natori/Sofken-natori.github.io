'use strict';

import styles from './Header.module.scss';
import type { JSX } from 'react';

/**
 * ヘッダー
 * @return ヘッダー要素
 */
export function Header(): JSX.Element {
    return (
        <header className={styles['header']}>
            <p>
                <abbr title="Software Research and Development Group">S.R.D.G.</abbr><wbr />
                ソフトウェア研究部会
            </p>
        </header>
    );
}
