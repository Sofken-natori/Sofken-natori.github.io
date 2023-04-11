'use strict';

import Link from 'next/link';

export default function Footer(): JSX.Element {
    const date = new Date();
    return (
        <>
            <footer className="footer">
                <div className="footer-info">
                    <div className="foot">
                        <h3>Location</h3>
                        <ul>
                            <li><Link href="https://www.sendai-nct.ac.jp">仙台高等専門学校</Link><br />名取キャンパス萩工会館2F</li>
                        </ul>
                    </div>
                    <div className="foot">
                        <h3>Contact</h3>
                        <ul>
                            <li>Email:<Link href="mailto:sofken.natori@gmail.com">sofken.natori@gmail.com</Link></li>
                        </ul>
                    </div>
                    <div className="foot">
                        <h3>Club Official SNS</h3>
                        <ul>
                            <li>Twitter:<Link href="https://twitter.com/sofken_natori">@sofken_natori</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2019-{date.getFullYear()} SNCT Natori Software Research and Development
                    Group. All rights reserved.
                </div>
            </footer>
            <style jsx>{`
                .footer {
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    background-color: var(--footer-bg-color);
                    clear: left;

                    a {
                        color: var(--footer-link-color);
                    }

                    .footer-info {
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: column;
                        @media (768px <= width) {
                            flex-direction: row;
                        }

                        .foot {
                            flex: auto;
                            margin: 0 10px 5px 10px;
                            padding: 5px 15px;

                            li {
                                list-style: none;
                                padding-left: 5px;
                            }
                        }
                    }

                    .copyright {
                        background-color: hsl(0deg, 0%, 6.67%);
                        text-align: center;
                        color: hsl(0deg, 0%, 100%);
                        margin: 0;
                        clear: left;
                    }
                }
            `}</style>
        </>
    );
}
