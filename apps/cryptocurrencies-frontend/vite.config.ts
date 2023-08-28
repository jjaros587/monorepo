/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
// import babelDev from 'vite-plugin-babel-dev'
import graphqlLoader from 'vite-plugin-graphql-loader'
// import babel from '@rollup/plugin-babel'
// import graphqlPlugin from 'vite-plugin-graphql'
import svgr from 'vite-plugin-svgr'
// import svgrPlugin from '@vitejs/plugin-svgr'
// import reactSvgLoader from 'vite-react-svg'
// import gql from 'vite-plugin-simple-gql'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/cryptocurrencies-frontend',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties'],
        },
      },
    }),
    svgr({ exportAsDefault: true }),
    viteTsConfigPaths({
      root: '../../',
    }),
    // gql(),
    graphqlLoader(),
    // {
    //   // Use the graphql-tag/loader for .graphql files
    //   name: 'graphql-loader',
    //   enforce: 'pre', // Run this before other loaders
    //   transform: (code, id) => {
    //     if (id.endsWith('.graphql')) {
    //       return `export default ${JSON.stringify(code)};`
    //     }
    //   },
    // },
    // babel({
    //   babelrc: false,
    //   configFile: './.babelrc',
    // }),
    // babelDev({
    //   babelConfig: {
    //     plugins: ['@babel/plugin-proposal-decorators', { legacy: true }],
    //   },
    // }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
