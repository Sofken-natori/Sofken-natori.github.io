'use strict';

export type Resources = Readonly<{
    resources: ResourceRecord[]
}>;

export type ResourceRecord = Readonly<{
    description?: string,
    files: FileRecord[],
    title?: string
}>;

export type FileRecord = Readonly<{
    filename: string,
    mime: string
}>;

export const enum MediaType {
    Unknown,
    Image,
    Music,
    Svg,
    Video
}

export function getMediaType(mime: string) {
    switch(mime) {
        case 'image/avif':
        case 'image/bmp':
        case 'image/gif':
        case 'image/jpeg':
        case 'image/png':
        case 'image/tiff':
        case 'image/webp':
            return MediaType.Image;
        case 'audio/mpeg':
        case 'audio/ogg':
            return MediaType.Music;
        case 'image/svg+xml':
            return MediaType.Svg;
        case 'video/mp4':
        case 'video/ogg':
        case 'video/webm':
            return MediaType.Video;
        default:
            break;
    }
    return MediaType.Unknown;
}
