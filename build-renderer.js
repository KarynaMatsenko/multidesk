// eslint-disable-next-line @typescript-eslint/no-var-requires
require('esbuild').buildSync({
    entryPoints: ['./src/renderer/index.tsx'],
    bundle: true,
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.png': 'dataurl',
    },
    outfile: './dist/renderer/index.js',
});
