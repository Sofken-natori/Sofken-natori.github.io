"use strict";

import styles from "./rationale.module.scss";
import { Resources, getMediaType } from "@/src/resources.ts";
import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Rationale() {
    const params = useParams();
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async () => {
            const res = await fetch("/resources/rationale/resources.json");
            const data: Resources = await res.json();
            setResourceManifest(data);
        })();
    }, []);
    if (params["vol"] === undefined) {
        throw new Error("Reached unreachable code.");
    }
    if (!resourceManifest) {
        return <h1>Rationale 読み込み中...</h1>;
    }
    const manifest = resourceManifest.resources.find((res) => res.title === `Rationale vol.${params["vol"]}`);
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
            <RationaleViewer filename={manifest.files[0].filename} />
            <RationaleExtra vol={params["vol"]} />
        </>
    );
}

type RationaleViewerProps = {
    filename: string;
};

function RationaleViewer({ filename }: RationaleViewerProps) {
    const PdfViewer = lazy(() => import("../components/pdf.tsx"));
    return (
        <Suspense>
            <PdfViewer fileNameGenerator={() => `rationale-${filename}`} url={`/resources/rationale/${filename}`} />
        </Suspense>
    );
}

type RationaleExtraProps = {
    vol: string;
};

function RationaleExtra({ vol }: RationaleExtraProps) {
    const [extraResourceManifest, setExtraResourceManifest] = useState<Resources>();
    useEffect(() => {
        (async () => {
            const res = await fetch(`/resources/rationale/vol${vol}/resources.json`);
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
                        <h2>{manifest.title}</h2>
                        <p>{manifest.description}</p>
                    </figcaption>
                    <Suspense>
                        <Media
                            files={manifest.files}
                            mediaType={getMediaType(manifest.files[0].mime)}
                            path={`/resources/rationale/vol${vol}`}
                        />
                    </Suspense>
                </figure>
            ))}
        </>
    );
}
