import { basename } from 'path-browserify';
import {
    useEffect, useState
} from 'react';
import { Link } from 'react-router';
import styles from '~/components/rationale/style.module.css';
import type { Resources } from '~/lib/resources';

export default function RationaleIndex() {
    const [resourceManifest, setResourceManifest] = useState<Resources>();
    useEffect(() => {
        fetch('/resources/rationale/resources.json')
            .then(res => res.json())
            .then(res => setResourceManifest(res));
    }, []);
    return (
        <>
            <h1>部誌『Rationale』Web版</h1>
            <p>
                ソフトウェア研究部会の部誌『Rationale』のWeb版を閲覧できます。
                紙媒体では実現できないフルカラーのページ・音楽などの制作物の実物など取り揃えております。
            </p>
            {resourceManifest ? (
                <dl className={styles['list']}>
                    {resourceManifest.resources.map((res, i) => {
                        const vol = parseInt(
                            basename(res.files[0]!.filename, '.pdf').substring(3),
                            10
                        );
                        return (
                            <div key={i}>
                                <dt>
                                    <Link to={`/rationale/${vol}`}>
                                        Rationale Vol.
                                        {vol}
                                    </Link>
                                </dt>
                                <dd>{res.description}</dd>
                            </div>
                        );
                    })}
                </dl>
            ) : (
                <h1>Rationale 読み込み中...</h1>
            )}
        </>
    );
}
