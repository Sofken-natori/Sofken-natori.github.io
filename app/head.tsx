'use strict';

import { DefaultHead } from './components';
import type { JSX } from 'react';

export default function Head(): JSX.Element {
    return (
        <DefaultHead description="仙台高専名取Cのソフトウェア研究部会のホームページです。" path="/" title="Top" />
    );
}
