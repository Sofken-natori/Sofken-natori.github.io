'use strict';

import styles from '../../components/Rational.module.scss';
import { Rational, getRationalMedia } from '../../components';
import type { JSX } from 'react';

export default function RationalVol33(): JSX.Element {
    return (
        <Rational vol={33}>
            <h2>楽曲</h2>
            <div className={styles['extra-contents']}>
                <h3>OverThere  composer:機械システム工学科 4年 hysk</h3>
                <audio className={styles['audio']} controls>
                    <source src={getRationalMedia(33, 'OverThere_hysk_PM4.mp3')} type="audio/mpeg" />
                </audio>
                <h3>手探り  composer:総合工学科II類 1年 yiu</h3>
                <audio className={styles['audio']} controls>
                    <source src={getRationalMedia(33, '手探り_yiu_2類.mp3')} type="audio/mpeg" />
                </audio>
            </div>
        </Rational>
    );
}
