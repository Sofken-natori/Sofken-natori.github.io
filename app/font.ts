/* eslint-disable camelcase */
'use strict';

import { Noto_Sans_JP } from '@next/font/google';
import type { NextFontWithVariable } from '@next/font';

export const NotoSansJP: NextFontWithVariable = Noto_Sans_JP({
    display: 'swap',
    subsets: [
        'latin'
    ],
    variable: '--font-noto-sans-jp',
    weight: 'variable'
});
