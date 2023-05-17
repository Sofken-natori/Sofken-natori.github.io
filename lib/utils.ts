'use strict';

/**
 * 指定された文字で指定の文字数になるよう埋め合わせる
 * @param value 元文字列・数字
 * @param pad 埋める文字(列)
 * @param count **合計の**文字数
 * @return パディング済み文字列
 */
export function padding(value: number | string, pad: string, count: number): string {
    let pads = '';
    for(let i = 0; i < count; i++) pads += pad;
    return `${pads}${value}`.slice(-count);
}
