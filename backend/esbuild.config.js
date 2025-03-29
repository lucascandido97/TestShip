const { build } = require('esbuild');
const path = require('path');

build({
  entryPoints: [path.resolve(__dirname, './src/app.ts')], // Absolute path to the entry file
  bundle: true, // Enable bundling
  minify: true, // Enable minification
  platform: 'node', // Set the environment to Node.js
  outfile: path.resolve(__dirname, './dist/bundle.js'), // Absolute path to the output file
  sourcemap: true, // Generate sourcemaps for debugging
  tsconfig: path.resolve(__dirname, './tsconfig.json'), // Use the tsconfig for resolving paths
  resolveExtensions: ['.ts', '.js'], // Resolve file extensions
  external: ['pg'], // Mark 'pg' as an external dependency
}).catch(() => process.exit(1));
