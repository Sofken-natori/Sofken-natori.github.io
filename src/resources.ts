'use strict';

export type Resources = Readonly<{
    meta?: Record<string, unknown>,
    resources: ResourceRecord[]
}>;

export type ResourceRecord = Readonly<{
    description?: string,
    files: FileRecord[],
    title?: string,
    type: MediaType
}>;

export type FileRecord = Readonly<{
    filename: string,
    mime: string,
    sha256sum?: string
}>;

export type MediaType = 'image' | 'music' | 'svg' | 'unknown' | 'video';
