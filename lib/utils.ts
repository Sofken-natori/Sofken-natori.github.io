'use strict';

export function padding(value: number | string, pad: string, count: number): string {
    let pads = '';
    for(let i = 0; i < count; i++) pads += pad;
    return `${pads}${value}`.slice(-count);
}
