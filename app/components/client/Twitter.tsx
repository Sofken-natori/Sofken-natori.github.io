/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use strict';
'use client';

import { DetailedHTMLProps, HTMLAttributes, JSX, RefObject, useEffect, useRef } from 'react';

declare global {
    interface Window {
        twttr: {
            widgets: {
                load: (HTMLElement) => Promise<unknown>;
            };
        };
    }
}

type EmbedSetting = Partial<{
    height: number | string,
    lang: string,
    width: number | string
}>;

/**
 * Twitterのタイムラインの埋め込み
 * @param username ユーザー名
 * @param attr 属性
 * @return タイムライン要素
 */
export function TwitterTimeline({ username, ...attr }: { username: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    useEffect(() => {
        void window.twttr?.widgets.load(ref.current);
    }, [username]);
    return (
        <div ref={ref} dangerouslySetInnerHTML={{ __html: generateEmbedTimelineHtml(username) }} {...attr} />
    );
}

/**
 * Twitterのツイートの埋め込み
 * @param id ツイートID
 * @param attr 属性
 * @return ツイート要素
 */
export function TwitterTweet({ id, ...attr }: { id: number | string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    useEffect(() => {
        void window.twttr?.widgets.load(ref.current);
    }, [id]);
    return (
        <div ref={ref} dangerouslySetInnerHTML={{ __html: generateEmbedTweetHtml(id) }} {...attr} />
    );
}

function generateEmbedTimelineHtml(username: string, setting?: EmbedSetting): string {
    return `<a class="twitter-timeline" data-lang="${setting?.lang ?? 'ja'}" data-width="${setting?.width ?? '400'}" data-height="${setting?.height ?? '600'}" href="https://twitter.com/${username}?ref_src=twsrc%5Etfw">Tweets by ${username}</a>`;
}

function generateEmbedTweetHtml(id: number | string): string {
    if(!/^\d+$/u.test(`${id}`)) throw new Error(`Invalid tweet ID: ${id}`);
    return `<blockquote class="twitter-tweet"><a href="https://twitter.com/i/status/${id}"></a></blockquote>`;
}
