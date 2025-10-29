import {
    Suspense, lazy, useEffect, useState
} from 'react';
import { P } from '~/components/p';
import styles from '~/components/rationale/style.module.css';
import type { Route } from './+types/rationale';
import type { Resources } from '~/lib/resources.ts';

export const meta: Route.MetaFunction = ({ params: { vol } }) => [
    {
        title: `Rationale Vol.${vol} - ソフトウェア研究部会`
    },
    {
        content: 'ソフトウェア研究部会の部誌『Rationale』Web版です。',
        name: 'description'
    }
];

export default function Rationale({ params: { vol } }: Route.ComponentProps) {
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        (
            async () => {
                const res = await fetch('/resources/rationale/resources.json');
                const data: Resources = await res.json();
                setResourceManifest(data);
            }
        )();
    }, []);
    if(vol === undefined) {
        throw new Error('Reached unreachable code.');
    }
    if(!resourceManifest) {
        return <h1>Rationale 読み込み中...</h1>;
    }
    const manifest = resourceManifest.resources.find(
        res => res.title === `Rationale vol.${vol}`
    );
    if(!manifest) {
        return (
            <>
                <h1>Rationale 読み込みエラー</h1>
                <P>Rationaleの詳細を取得できませんでした。</P>
            </>
        );
    }
    return (
        <>
            <h1>{manifest.title}</h1>
            <P>{manifest.description}</P>
            <RationaleViewer vol={vol} />
            <RationaleExtra vol={vol} />
        </>
    );
}

type RationaleViewerProps = {
    vol: string
};

function RationaleViewer({ vol }: RationaleViewerProps) {
    const Media = lazy(() => import('../components/media'));
    const [manifest, setManifest] = useState<Resources>();
    useEffect(() => {
        const res = fetch(
            `/resources/rationale/vol${vol}/pages/resources.json`
        );
        res.then(res => res.json()).then(manifest => setManifest(manifest));
    }, [vol]);
    if(!manifest?.meta) {
        return undefined;
    }
    const totalPages = manifest.meta['total-pages'] as number;
    return (
        <div className={styles['viewer']}>
            <Suspense>
                {(
                    () => {
                        const pages = [];
                        for(let i = 0; i < totalPages; i++) {
                            const { files } = manifest.resources[i]!;
                            pages.push(
                                <Media
                                    files={files}
                                    key={i}
                                    mediaType="image"
                                    path={`/resources/rationale/vol${vol}/pages`}
                                />
                            );
                        }
                        return pages;
                    }
                )()}
            </Suspense>
        </div>
    );
}

type RationaleExtraProps = {
    vol: string
};

function RationaleExtra({ vol }: RationaleExtraProps) {
    const [extraResourceManifest, setExtraResourceManifest]
        = useState<Resources>();
    useEffect(() => {
        (
            async () => {
                const res = await fetch(
                    `/resources/rationale/vol${vol}/resources.json`
                );
                const data: Resources = await res.json();
                setExtraResourceManifest(data);
            }
        )();
    }, [vol]);
    if(!extraResourceManifest) {
        return <h1>Extra Contents 読み込み中...</h1>;
    }
    const { resources } = extraResourceManifest;
    if(resources.length === 0) {
        return undefined;
    }
    const Media = lazy(() => import('../components/media'));
    return (
        <>
            <h1>Extra Contents</h1>
            {resources.map((manifest, i) => (
                <figure className={styles['ex-container']} key={i}>
                    <figcaption>
                        <h2>{manifest.title ?? manifest.files[0]!.filename}</h2>
                        <P>{manifest.description}</P>
                    </figcaption>
                    <Suspense>
                        <Media
                            files={manifest.files}
                            mediaType={manifest.type}
                            path={`/resources/rationale/vol${vol}`}
                        />
                    </Suspense>
                </figure>
            ))}
        </>
    );
}
