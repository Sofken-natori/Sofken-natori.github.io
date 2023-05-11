/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use strict';
'use client';

import { useEffect, useRef } from 'react';

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

export function TwitterTimeline({ username }: { username: string }): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        void window.twttr?.widgets.load(ref.current);
    }, [username]);
    return (
        <div ref={ref} dangerouslySetInnerHTML={{ __html: generateEmbedTimelineHtml(username) }} />
    );
}

export function TwitterTweet({ id }: { id: number | string }): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        void window.twttr?.widgets.load(ref.current);
    }, [id]);
    return (
        <div ref={ref} dangerouslySetInnerHTML={{ __html: generateEmbedTweetHtml(id) }} />
    );
}

function generateEmbedTimelineHtml(username: string, setting?: EmbedSetting): string {
    return `<a class="twitter-timeline" data-lang="${setting?.lang ?? 'ja'}" data-width="${setting?.width ?? '400'}" data-height="${setting?.height ?? '600'}" href="https://twitter.com/${username}?ref_src=twsrc%5Etfw">Tweets by ${username}</a>`;
}

function generateEmbedTweetHtml(id: number | string): string {
    if(!/^\d+$/u.test(`${id}`)) throw new Error(`Invalid tweet ID: ${id}`);
    return `<blockquote class="twitter-tweet"><a href="https://twitter.com/i/status/${id}"></a></blockquote>`;
}
