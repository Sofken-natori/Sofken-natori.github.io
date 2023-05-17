'use strict';
'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import { DOCUMENT_ROOT } from '../../../lib/contants';
import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import { cppEntHardPages, cppEntPages } from '../index';
import { useWindowSize } from '../../hooks';

/**
 * ナビゲーション
 * @return ナビゲーション要素
 */
export function Navigation(): JSX.Element {
    const [width] = useWindowSize();
    const [isOpen, setIsOpen] = useState(true);
    const [isRationalOpen, setIsRationalOpen] = useState(true);
    const [isCPPEntOpen, setIsCPPEntOpen] = useState(true);
    useEffect(() => {
        if(0 < width && width < 768) setIsOpen(false);
    }, [width]);
    return (
        <nav className={styles['nav']}>
            <div className={styles['nav-container']}>
                <div className={styles['nav-button']} id="nav-button" onClick={() => toggleMenu(setIsOpen)} />
                <div className={styles['navigation']}>
                    <ul className={styles['nav-list']} id="navigation" style={{ display: isOpen ? '' : 'none' }}>
                        <li className={isOpen ? '' : styles['nav-hidden']}><a href={`${DOCUMENT_ROOT}/`} title="トップページ">TOP</a></li>
                        <li className={`${styles['nav-sub']} ${isOpen ? '' : styles['nav-hidden']}`}>
                            <h2 className={styles['nav-sub-button']} title="レーショナル(部誌)" onClick={() => toggleMenu(setIsRationalOpen)}>Rationale</h2>
                            <ul className={styles['nav-list']}>
                                {[36, 35, 34, 33, 32].map(num => <li key={`rational-${num}`} className={isRationalOpen ? '' : styles['nav-hidden']}><Link href={`/rational/vol${num}`} title={`${num + 1986}年発行 レーショナル 第${num}号`}>vol.{num}({num + 1986})</Link></li>)}
                            </ul>
                        </li>
                        <li className={`${styles['nav-sub']} ${isOpen ? '' : styles['nav-hidden']}`}>
                            <h2 className={styles['nav-sub-button']} title="C++入門" onClick={() => toggleMenu(setIsCPPEntOpen)}>C++入門</h2>
                            <ul className={styles['nav-list']}>
                                <li className={isCPPEntOpen ? '' : styles['nav-hidden']}><Link href="/cpp" title="C++入門 目次">目次</Link></li>
                                {(() => {
                                    const pages: JSX.Element[] = [];
                                    // eslint-disable-next-line guard-for-in
                                    for(const page in cppEntPages) pages.push(<li key={`cpp-ent-${page}`} className={isCPPEntOpen ? '' : styles['nav-hidden']} style={{ height: isCPPEntOpen ? 1 < (cppEntPages[page] as string).length / 6 ? `calc(var(--navigation-item-height) * ${Math.ceil((cppEntPages[page] as string).length / 6)} - ${(Math.ceil((cppEntPages[page] as string).length / 6) - 1) * 30}px)` : undefined : undefined }}><Link href={`/cpp/${page}`} title={`C++入門 入門(当社比)編 ${cppEntPages[page]}`}>{cppEntPages[page]}</Link></li>);
                                    // eslint-disable-next-line guard-for-in
                                    for(const page in cppEntHardPages) pages.push(<li key={`cpp-ent-${page}`} className={isCPPEntOpen ? '' : styles['nav-hidden']} style={{ color: 'hsl(60deg, 100%, 50%)', height: isCPPEntOpen ? 1 < (cppEntHardPages[page] as string).length / 6 ? `calc(var(--navigation-item-height) * ${Math.ceil((cppEntHardPages[page] as string).length / 6)} - ${(Math.ceil((cppEntHardPages[page] as string).length / 6) - 1) * 30}px)` : undefined : undefined }}><Link href={`/cpp/${page}`} title={`C++入門 上級編 ${cppEntHardPages[page]}`}>{cppEntHardPages[page]}</Link></li>);
                                    return pages;
                                })()}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function toggleMenu(setIsMenuOpen: Dispatch<SetStateAction<boolean>>): void {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
}
