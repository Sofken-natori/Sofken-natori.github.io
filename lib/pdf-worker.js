'use strict';

module.exports = process.env.NODE_ENV === 'production' ? require('pdfjs-dist/build/pdf.worker.min') : require('pdfjs-dist/build/pdf.worker');
