import { loadDefaultJapaneseParser } from 'budoux';
import type { ReactNode } from 'react';

const parser = loadDefaultJapaneseParser();

export type UseBudouXResult = {
    parse: (str: string) => ReactNode[]
};

export function useBudouX(): UseBudouXResult {
    function parse(str: string) {
        return parser.parse(str).map((s, i) => <span key={i}>{s}</span>);
    }

    return {
        parse
    };
}
