/// <reference types="vitest" />
import autoprefixer from 'autoprefixer'
import crypto from 'crypto'
import dtsPlugin from 'vite-plugin-dts'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const getScopedName = (name: string, filename: string, css: string) => {
  const pathArr = filename.replace(/\.\w+$/, '').split('/')

  const libIdx = pathArr.indexOf('lib')
  const westUiIdx = pathArr.indexOf('west-ui')

  const componentName = pathArr
    .slice(libIdx ? libIdx + 1 : westUiIdx + 1)
    .join('__')
    .replace(/\./, '_')

  // Generate hash
  const hash = crypto
    .createHash('md5')
    .update(css)
    .digest('base64')
    .substring(0, 5)

  return `west-ui__${componentName}__${name}__${hash}`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dtsPlugin({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    modules: {
      generateScopedName: getScopedName,
    },
  },
  build: {
    /** Library entry and output setting */
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'west-ui',
      fileName: format => `west-ui.${format}.js`,
    },
    /**
     * Bundle options
     * External react-related imports
     */
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dome': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test/setup.ts',
    css: true,
  },
})
