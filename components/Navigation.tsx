'use strict';

import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/components/Navigation.module.scss';
import { DOCUMENT_ROOT } from '../lib/contants';

export default function Navigation(): JSX.Element {
    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['navContainer']}>
                    <div className={styles['navButton']} id="nav-button" />
                    <div className={styles['navigation']}>
                        <ul className={styles['navList']} id="navigation">
                            <li><Link href={`${DOCUMENT_ROOT}/`} title="トップページ">TOP</Link></li>
                            <li className={styles['navSub']}>
                                <h2 className={styles['navSubButton']} title="レーショナル(部誌)">Rationale</h2>
                                <ul className={styles['navList']}>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol36`} title="2022年発行 レーショナル 第36号">vol.36(2022)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol35`} title="2021年発行 レーショナル 第35号">vol.35(2021)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol34`} title="2020年発行 レーショナル 第34号">vol.34(2020)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol33`} title="2019年発行 レーショナル 第33号">vol.33(2019)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol32`} title="2018年発行 レーショナル 第32号">vol.32(2018)</Link></li>
                                </ul>
                            </li>
                            <li className={styles['navSub']}>
                                <h2 className={styles['navSubButton']} title="C++入門">C++入門</h2>
                                <ul className={styles['navList']}>
                                    <li><Link href={`${DOCUMENT_ROOT}/cpp`} title="C++入門 目次">目次</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/cpp/type`} title="C++入門 データ型">データ型</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/cpp/variable`} title="C++入門 変数">変数</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/cpp/logical`} title="C++入門 論理演算">論理演算</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Script id="navigation-ctrl" strategy="lazyOnload" dangerouslySetInnerHTML={{
                __html: `
                    (() => {
                        'use strict';
                        const navButton = document.getElementById('${styles['navButton']}');
                        const navSubButton = document.getElementsByClassName('${styles['navSubButton']}');
                        const navigationList = document.getElementsByClassName('${styles['navList']}');
                        if(navigationList.length < navSubButton.length + 1) {
                            throw new Error('Navigation sub menus are invalid.');
                            return;
                        }
                        for(const e of navigationList) e.style.display = 'none';
                        let isOpen = new Array(navigationList.length).map(() => false);
                        if(768 <= Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) {
                            for(const e of navigationList) e.style.display = '';
                            isOpen = isOpen.map(() => true);
                        }
                        navButton.addEventListener('click', () => {
                            if(isOpen[0]) {
                                navigationList[0].style.display = 'none';
                                isOpen[0] = false;
                            } else {
                                navigationList[0].style.display = '';
                                isOpen[0] = true;
                            }
                        });
                        for(let i = 0; i < navSubButton.length; i++) navSubButton[i].addEventListener('click', () => {
                            if(isOpen[i + 1]) {
                                navigationList[i + 1].style.display = 'none';
                                isOpen[i + 1] = false;
                            } else {
                                navigationList[i + 1].style.display = '';
                                isOpen[i + 1] = true;
                            }
                        });
                        window.addEventListener('resize', () => {
                            if(768 <= Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) {
                                for(const e of navigationList) e.style.display = '';
                                isOpen = isOpen.map(() => true);
                            } else {
                                for(const e of navigationList) e.style.display = 'none';
                                isOpen = isOpen.map(() => false);
                            }
                        });
                    })();
                `
            }} />
        </>
    );
}
