# pdfstudio 0.4.0 (vendored, unmodified)

Client-side PDF toolkit powered by qpdf compiled to WebAssembly.
https://github.com/fayazara/pdfstudio — Apache-2.0 (see LICENSE, shipped from the npm tarball).

Vendored byte-identical from `pdfstudio@0.4.0` on npm (tarball `dist/` tree).
Consumed via dynamic `import('/shared/vendor/pdfstudio/dist/index.js')` — the ESM
graph resolves `./wasm/qpdf.wasm` relative to `import.meta.url`, so the whole tree
must stay in this layout. Entry API: `createPdfToolkit()` → `{ watermark, repair,
merge, split, rotate, compress, lock, unlock, … }` (all Promise<Uint8Array>).

Used by: /watermark-pdf/, /pdf-repair/ (and their embed widgets).
First use loads ~2.2 MB of wasm; cached by the browser afterwards.
