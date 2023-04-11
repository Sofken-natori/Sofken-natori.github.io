'use strict';

import styles from '../styles/components/Header.module.scss';

export default function Header(): JSX.Element {
    return (
        <header className={styles['header']}>
            <p><abbr title="Software Research and Development Group">S.R.D.G.</abbr> ソフトウェア研究部会</p>
        </header>
    );
}
