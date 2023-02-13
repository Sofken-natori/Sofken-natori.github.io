'use strict';

import Link from 'next/link';

export default function Footer(): JSX.Element {
    const date = new Date();
    return (
        <footer className="footer">
            <div className="footer-info">
                <div className="foot">
                    <h3>Location</h3>
                    <ul>
                        <li><Link href="https://www.sendai-nct.ac.jp/">仙台高等専門学校</Link><br />名取キャンパス萩工会館2F</li>
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
                        <li>Twitter:<Link href="https://twitter.com/sofken_natori/">@sofken_natori</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2019-{date.getFullYear()} SNCT Natori Software Research and Development
                Group. All rights reserved.
            </div>
        </footer>
    );
}
