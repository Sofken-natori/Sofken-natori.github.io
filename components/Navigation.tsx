'use strict';

import Link from 'next/link';
import Script from 'next/script';
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
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol36`} title="2022年発行 レーショナル 第36号">vol.36(2022)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol35`} title="2021年発行 レーショナル 第35号">vol.35(2021)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol34`} title="2020年発行 レーショナル 第34号">vol.34(2020)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol33`} title="2019年発行 レーショナル 第33号">vol.33(2019)</Link></li>
                                    <li><Link href={`${DOCUMENT_ROOT}/rational/vol32`} title="2018年発行 レーショナル 第32号">vol.32(2018)</Link></li>
                                </ul>
                            </li>
                            <li className="nav-sub">
                                <h2 className="nav-sub-button" title="C++入門">C++入門</h2>
                                <ul className="nav-list">
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
            <style jsx>{`
                @media (768px <= width) {
                    .nav {
                        padding: 0;
                        flex: 0 1 auto;
                    }
                }

                .nav-container {
                    display: block;
                    background-color: var(--navigation-bg-color);
                    position: fixed;
                    top: 0;
                    right: 0;
                    z-index: 20;
                    margin: 0;
                    padding: 0;
                    width: 200px;
                }

                @media (768px <= width) {
                    .nav-container {
                        position: relative;
                        top: 0;
                        left: 0;
                        object-fit: contain;
                        flex: 0 0 auto;
                    }
                }

                .navigation {
                    background-color: var(--navigation-bg-color);
                    position: fixed;
                    top: 62px;
                    right: 0;
                    z-index: 20;
                    margin: 0;
                    padding: 0;
                    width: 200px;
                    box-shadow: 0 5px 5px hsl(0deg, 0%, 0%, 40%);
                    overflow: hidden auto;
                }

                @media (768px <= width) {
                    .navigation {
                        position: relative;
                        top: 0;
                        left: 0;
                        width: 100%;
                        box-shadow: none;
                    }
                }

                .navigation h2 {
                    margin: 0;
                    padding: 8.1px 20px;
                }

                @media (768px <= width) {
                    .navigation h2 {
                        padding: 0.5rem;
                    }
                }

                .nav-list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    transition: display .3s ease-out;
                }

                @media (768px <= width) {
                    .nav-list {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                    }
                }

                .nav-list li {
                    text-align: center;
                    border-top: 1px solid hsl(0deg, 0%, 0%);
                }

                @media (768px <= width) {
                    .nav-list li {
                        flex: 0 0 auto;
                    }
                }

                .nav-list li:last-child {
                    border-bottom: 1px solid hsl(0deg, 0%, 0%);
                }

                .nav-list li a {
                    display: block;
                    padding: 15px 20px;
                    background-color: var(--navigation-item-bg-color);
                    text-decoration: none;
                    line-height: 1;
                    color: var(--navigation-item-color);
                }

                .nav-list li a:active, .nav-list li a:focus, .nav-list li a:hover {
                    background-color: var(--navigation-item-hover-bg-color);
                    transition: background-color .3s linear;
                }

                .nav-sub .nav-list li {
                    margin-left: 1.5rem;
                }

                .nav-sub .nav-list li:last-child {
                    border-bottom: none;
                }

                .nav-button {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 30;
                    width: 62px;
                    height: 62px;
                    background-color: var(--navigation-button-bg-color);
                    background-image: url(../public/navbtn.avif), url(../public/navbtn.webp), url(../public/navbtn.png);
                    background-size: 62px;
                }

                @media (768px <= width) {
                    .nav-button {
                        display: none;
                    }
                }

                .nav-button:active, .nav-button:focus, .nav-button:hover {
                    background-color: var(--navigation-button-hover-bg-color);
                    transition: background-color .3s linear;
                }

                .nav-sub-button {
                    cursor: pointer;
                }
            `}</style>
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
