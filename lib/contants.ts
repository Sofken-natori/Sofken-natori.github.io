'use strict';

export const DOCUMENT_ROOT: string = process.env['ROOT'] ?? '';
export const IS_UNOFFICIAL_BUILD: boolean = process.env['TYPE'] === 'unofficial';
