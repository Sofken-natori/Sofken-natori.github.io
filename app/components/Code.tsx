'use strict';

import type { JSX, ReactNode } from 'react';

export type Language = 'cpp';

type Props = {
    content: string,
    lang: Language
};

export function Code({ content, lang }: Props): JSX.Element {
    return (
        <pre className="line-numbers">
            <code className={`language-${lang}`}>
                {`${content}`}
            </code>
        </pre>
    );
}

export function C({ children }: { children: ReactNode }): JSX.Element {
    return (
        <span className="inline-code">{children}</span>
    );
}
