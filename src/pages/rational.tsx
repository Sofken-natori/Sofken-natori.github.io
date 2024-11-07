'use strict';

import styles from './rational.module.scss';
import { Media } from '@/src/components/media.tsx';
import { PdfViewer } from '@/src/components/pdf.tsx';
import { Resources, getMediaType } from '@/src/resources.ts';
import { basename } from 'path-browserify';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function RationalIndex() {
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async() => {
            const res = await fetch('/resources/rational/resources.json');
            const data: Resources = await res.json();
            setResourceManifest(data);
        })();
    }, []);
    return (
        <>
            <h1>部誌『Rational』Web版</h1>
            <p>
                ソフトウェア研究部会の部誌『Rational』のWeb版を閲覧できます。
                紙媒体では実現できないフルカラーのページ・音楽などの制作物の実物など取り揃えております。
            </p>
            {resourceManifest ? (
                <dl className={styles['rational-list']}>
                    {resourceManifest.resources.map((res, i) => {
                        const vol = parseInt(basename(res.files[0].filename, '.pdf').substring(3), 10);
                        return (
                            <div key={i}>
                                <dt>
                                    <Link to={`/rational/${vol}`}>
                                        Rational Vol.{vol}
                                    </Link>
                                </dt>
                                <dd>
                                    {res.description}
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            ) : (
                <h1>Rational 読み込み中...</h1>
            )}
        </>
    );
}

export function Rational() {
    const params = useParams();
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async() => {
            const res = await fetch('/resources/rational/resources.json');
            const data: Resources = await res.json();
            setResourceManifest(data);
        })();
    }, []);
    if(params['vol'] === undefined) {
        throw new Error('Reached unreachable code.');
    }
    if(!resourceManifest) {
        return (
            <h1>Rational 読み込み中...</h1>
        );
    }
    const manifest = resourceManifest.resources.find(res => res.title === `Rational vol.${params['vol']}`);
    if(!manifest) {
        return (
            <>
                <h1>Rational 読み込みエラー</h1>
                <p>
                    Rationalの詳細を取得できませんでした。
                </p>
            </>
        );
    }
    return (
        <>
            <h1>{manifest.title}</h1>
            <p>{manifest.description}</p>
            <RationalViewer filename={manifest.files[0].filename} />
            <RationalExtra vol={params['vol']} />
        </>
    );
}

type RationalViewerProps = {
    filename: string
};

function RationalViewer({ filename }: RationalViewerProps) {
    return (
        <PdfViewer
            fileNameGenerator={() => `rational-${filename}`}
            url={`/resources/rational/${filename}`}
        />
    );
}

type RationalExtraProps = {
    vol: string
};

function RationalExtra({ vol }: RationalExtraProps) {
    const [extraResourceManifest, setExtraResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async() => {
            const res = await fetch(`/resources/rational/vol${vol}/resources.json`);
            const data: Resources = await res.json();
            setExtraResourceManifest(data);
        })();
    }, [vol]);
    if(!extraResourceManifest) {
        return (
            <h1>Extra Contents 読み込み中...</h1>
        );
    }
    const { resources } = extraResourceManifest;
    if(resources.length === 0) {
        return undefined;
    }
    return (
        <>
            <h1>Extra Contents</h1>
            {resources.map((manifest, i) => (
                <figure
                    className={styles['extra-contents-container']}
                    key={i}
                >
                    <figcaption>
                        <h2>{manifest.title}</h2>
                        <p>{manifest.description}</p>
                    </figcaption>
                    <Media
                        files={manifest.files}
                        mediaType={getMediaType(manifest.files[0].mime)}
                        path={`/resources/rational/vol${vol}`}
                    />
                </figure>
            ))}
        </>
    );
}
