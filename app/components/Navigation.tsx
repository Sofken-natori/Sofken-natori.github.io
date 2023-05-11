'use strict';

import Link from 'next/link';
import Script from 'next/script';
import { DOCUMENT_ROOT } from '../../lib/contants';
import { cppEntHardPages, cppEntPages } from '.';

export function Navigation(): JSX.Element {
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-button" id="nav-button" />
                    <div className="navigation">
                        <ul className="nav-list" id="navigation">
                            <li><a href={`${DOCUMENT_ROOT}/`} title="トップページ">TOP</a></li>
                            <li className="nav-sub">
                                <h2 className="nav-sub-button" title="レーショナル(部誌)">Rationale</h2>
                                <ul className="nav-list">
                                    {[36, 35, 34, 33, 32].map(num => <li key={`rational-${num}`}><Link href={`/rational/vol${num}`} title={`${num + 1986}年発行 レーショナル 第${num}号`}>vol.{num}({num + 1986})</Link></li>)}
                                </ul>
                            </li>
                            <li className="nav-sub">
                                <h2 className="nav-sub-button" title="C++入門">C++入門</h2>
                                <ul className="nav-list">
                                    <li><Link href="/cpp" title="C++入門 目次">目次</Link></li>
                                    {(() => {
                                        const pages: JSX.Element[] = [];
                                        // eslint-disable-next-line guard-for-in
                                        for(const page in cppEntPages) pages.push(<li key={`cpp-ent-${page}`}><Link href={`/cpp/${page}`} title={`C++入門 入門(当社比)編 ${cppEntPages[page]}`}>{cppEntPages[page]}</Link></li>);
                                        // eslint-disable-next-line guard-for-in
                                        for(const page in cppEntHardPages) pages.push(<li key={`cpp-ent-${page}`} style={{ color: 'hsl(60deg, 100%, 50%)' }}><Link href={`/cpp/${page}`} title={`C++入門 上級編 ${cppEntHardPages[page]}`}>{cppEntHardPages[page]}</Link></li>);
                                        return pages;
                                    })()}
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
                        const navButton = document.getElementById('nav-button');
                        const navSubButton = document.getElementsByClassName('nav-sub-button');
                        const navigationList = document.getElementsByClassName('nav-list');
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
