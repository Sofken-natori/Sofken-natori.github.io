"use strict";

import styles from "./rationale.module.scss";
import Spinner from "@/src/components/spinner.tsx";
import type { Resources } from "@/src/resources.ts";
import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Rationale() {
    const params = useParams();
    const vol = params["vol"];
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async () => {
            const res = await fetch("/resources/rationale/resources.json");
            const data: Resources = await res.json();
            setResourceManifest(data);
        })();
    }, []);
    if (vol === undefined) {
        throw new Error("Reached unreachable code.");
    }
    if (!resourceManifest) {
        return <h1>Rationale 読み込み中...</h1>;
    }
    const manifest = resourceManifest.resources.find(
        (res) => res.title === `Rationale vol.${vol}`,
    );
    if (!manifest) {
        return (
            <>
                <h1>Rationale 読み込みエラー</h1>
                <p>Rationaleの詳細を取得できませんでした。</p>
            </>
        );
    }
    return (
        <>
            <h1>{manifest.title}</h1>
            <p>{manifest.description}</p>
            <RationaleViewer vol={vol} />
            <RationaleExtra vol={vol} />
        </>
    );
}

type RationaleViewerProps = {
    vol: string;
};

function RationaleViewer({ vol }: RationaleViewerProps) {
    const Media = lazy(() => import("../components/media.tsx"));
    const [manifest, setManifest] = useState<Resources>();
    useEffect(() => {
        const res = fetch(
            `/resources/rationale/vol${vol}/pages/resources.json`,
        );
        res.then((res) => res.json()).then((manifest) => setManifest(manifest));
    }, [vol]);
    if (!manifest?.meta) {
        return undefined;
    }
    const totalPages = manifest.meta["total-pages"] as number;
    return (
        <div className={styles["rationale-viewer"]}>
            <Suspense fallback={<Spinner className={styles["page-spinner"]} />}>
                {(() => {
                    const pages = [];
                    for (let i = 0; i < totalPages; i++) {
                        const { files } = manifest.resources[i];
                        pages.push(
                            <Media
                                files={files}
                                key={i}
                                mediaType="image"
                                path={`/resources/rationale/vol${vol}/pages`}
                            />,
                        );
                    }
                    return pages;
                })()}
            </Suspense>
        </div>
    );
}

type RationaleExtraProps = {
    vol: string;
};

function RationaleExtra({ vol }: RationaleExtraProps) {
    const [extraResourceManifest, setExtraResourceManifest] =
        useState<Resources>();
    useEffect(() => {
        (async () => {
            const res = await fetch(
                `/resources/rationale/vol${vol}/resources.json`,
            );
            const data: Resources = await res.json();
            setExtraResourceManifest(data);
        })();
    }, [vol]);
    if (!extraResourceManifest) {
        return <h1>Extra Contents 読み込み中...</h1>;
    }
    const { resources } = extraResourceManifest;
    if (resources.length === 0) {
        return undefined;
    }
    const Media = lazy(() => import("../components/media.tsx"));
    return (
        <>
            <h1>Extra Contents</h1>
            {resources.map((manifest, i) => (
                <figure className={styles["extra-contents-container"]} key={i}>
                    <figcaption>
                        <h2>{manifest.title ?? manifest.files[0].filename}</h2>
                        <p>{manifest.description}</p>
                    </figcaption>
                    <Suspense
                        fallback={
                            <Spinner className={styles["extra-spinner"]} />
                        }
                    >
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
