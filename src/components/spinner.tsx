'use strict';

import styles from './spinner.module.scss';
import type { HTMLAttributes } from 'react';

export type SpinnerProps = {
    className: HTMLAttributes<HTMLDivElement>['className']
};

export default function Spinner({ className }: SpinnerProps) {
    return (
        <div className={`${styles['spinner-container']} ${className}`}>
            <div className={styles['outer']} />
            <div className={styles['inner']} />
        </div>
    );
}
