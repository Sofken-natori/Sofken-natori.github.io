'use strict';

import Link from 'next/link';
import styles from './Footer.module.scss';
import type { JSX } from 'react';

/**
 * フッター
 * @return フッター要素
 */
export function Footer(): JSX.Element {
    const date = new Date();
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-info']}>
                <div className={styles['foot']}>
                    <h3>Location</h3>
                    <ul>
                        <li><Link href="https://www.sendai-nct.ac.jp">仙台高等専門学校</Link><br />名取キャンパス萩工会館2F</li>
                    </ul>
                </div>
                <div className={styles['foot']}>
                    <h3>Contact</h3>
                    <ul>
                        <li>Email:<Link href="mailto:sofken.natori@gmail.com">sofken.natori@gmail.com</Link></li>
                    </ul>
                </div>
                <div className={styles['foot']}>
                    <h3>Club Official SNS</h3>
                    <ul>
                        <li>Twitter:<Link href="https://twitter.com/sofken_natori">@sofken_natori</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles['copyright']}>
                Copyright © 2019-{date.getFullYear()} SNCT Natori Software Research and Development Group.<wbr />
                All rights reserved.
            </div>
        </footer>
    );
}
