'use strict';

import { FileRecord, MediaType } from '@/src/resources.ts';

export type MediaProps = {
    alt?: string,
    files: FileRecord[],
    mediaType: MediaType,
    path: string
};

export default function Media({ alt, files, mediaType, path }: MediaProps) {
    if(files.length === 0) {
        return undefined;
    }
    switch(mediaType) {
        case MediaType.Image: {
            const files1 = files.slice(0, files.length - 1);
            const fallback = files[files.length - 1];
            return (
                <picture>
                    {files1.map((file, i) => (
                        <source
                            aria-label={alt}
                            key={i}
                            srcSet={`${path}/${file.filename}`}
                            type={file.mime}
                        />
                    ))}
                    <img
                        alt={alt}
                        aria-label={alt}
                        src={`${path}/${fallback.filename}`}
                    />
                </picture>
            );
        }
        case MediaType.Music:
            return (
                <audio controls>
                    {files.map((file, i) => (
                        <source
                            aria-label={alt}
                            key={i}
                            src={`${path}/${file.filename}`}
                            type={file.mime}
                        />
                    ))}
                </audio>
            );
        case MediaType.Svg:
            return (
                <>
                    {files.map((file, i) => (
                        <svg
                            href={`${path}/${file.filename}`}
                            key={i}
                        />
                    ))}
                </>
            );
        case MediaType.Video:
            return (
                <video controls>
                    {files.map((file, i) => (
                        <source
                            aria-label={alt}
                            key={i}
                            src={`${path}/${file.filename}`}
                            type={file.mime}
                        />
                    ))}
                </video>
            );
        default:
            break;
    }
    return (
        <>
            {files.map((file, i) => (
                <p key={i}>
                    <a href={`${path}/${file.filename}`}>
                        {file.filename}
                    </a>
                </p>
            ))}
        </>
    );
}

