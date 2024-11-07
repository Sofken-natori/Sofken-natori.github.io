'use strict';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{scss,tsx}'
    ],
    plugins: [],
    theme: {
        extend: {
            minWidth: {
                'dvw': '100dvw'
            },
            spacing: {
                '160': '40rem',
                '192': '48rem',
                '208': '52rem'
            }
        },
        fontFamily: {
            sans: [
                '"Noto Sans JP"',
                '"Noto Sans CJK JP"',
                '"Helvetica Neue"',
                'Helvetica',
                'Arial',
                '"Hiragino Sans"',
                '"Hiragino Kaku Gothic ProN"',
                '"Yu Gothic"',
                'Meiryo',
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                '"Noto Color Emoji"',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ]
        }
    }
};
