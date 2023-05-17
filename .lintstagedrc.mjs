'use strict';

import { relative } from 'path';

export default {
    '*.{j,t}s{,x}': [
        filenames => `next lint --fix --file ${filenames.map(f => relative(process.cwd(), f)).join(' --file ')}`
    ]
};
