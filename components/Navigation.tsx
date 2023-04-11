'use strict';

import Link from 'next/link';
import { DOCUMENT_ROOT } from '../lib/contants';

export default function Navigation(): JSX.Element {
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-button" id="nav-button" />
                    <div className="navigation">
                        <ul className="nav-list" id="navigation">
                            <li><Link href={`${DOCUMENT_ROOT}/`} title="トップページ">TOP</Link></li>
                            <li className="nav-sub">
                                <h2 className="nav-sub-button" title="レーショナル(部誌)">Rationale</h2>
                                <ul className="nav-list">
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol36/`} title="2022年発行 レーショナル 第36号">vol.36(2022)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol35/`} title="2021年発行 レーショナル 第35号">vol.35(2021)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol34/`} title="2020年発行 レーショナル 第34号">vol.34(2020)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol33/`} title="2019年発行 レーショナル 第33号">vol.33(2019)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol32/`} title="2018年発行 レーショナル 第32号">vol.32(2018)</Link></li>
                                </ul>
                            </li>
                            <li className="nav-sub">
                                <h2 className="nav-sub-button" title="C++入門">C++入門</h2>
                                <ul className="nav-list">
                                    <li><Link href={`${DOCUMENT_ROOT}/cpp/`} title="C++入門 目次">目次</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <script dangerouslySetInnerHTML={{
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
