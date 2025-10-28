import styles from './style.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles['footer']}>
            <div className={styles['info-container']}>
                <div className={styles['info-item']}>
                    <h1>Location</h1>
                    <p>
                        <a href="https://www.sendai-nct.ac.jp">
                            仙台高等専門学校
                        </a>
                        名取キャンパス萩工会館(2号棟)2F
                    </p>
                </div>
                <div className={styles['info-item']}>
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            Mail:
                            {' '}
                            <a href="mailto:sofken.natori@gmail.com">
                                sofken.natori@gmail.com
                            </a>
                        </li>
                        <li>
                            Twitter:
                            {' '}
                            <a href="https://twitter.com/sofken_natori">
                                @sofken_natori
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles['copyright']}>
                Copyright © 2019-
                {currentYear}
                {' '}
                Software Research and
                Development Group. All rights reserved.
            </div>
        </footer>
    );
}
