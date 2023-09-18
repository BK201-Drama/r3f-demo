import react from '@vitejs/plugin-react'
import * as path from 'path'
import { resolve } from 'path'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './configs/env',
  plugins: [
    react(),
    autoImport({
      imports: [
        'react',
        'mobx',
        'mobx-react-lite',
        'ahooks',
        {
          lodash: [['default', '_']],
        },
        {
          react: ['Suspense', 'lazy', 'createContext'],
        },
        {
          '@/core/box/store/index.store': ['boxStore'],
        },
        {
          '@/core/line/store/index.store': ['lineStore'],
        },
      ],
      dts: 'configs/autoImport/auto-imports.d.ts', // 生成自动导入文件声明
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './configs/autoImport/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@core',
        replacement: resolve(__dirname, './src/core'),
      },
      {
        find: '@domain',
        replacement: resolve(__dirname, './src/domain'),
      },
      {
        find: '@features',
        replacement: resolve(__dirname, './src/features'),
      },
      {
        find: '@styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      {
        find: '@public',
        replacement: resolve(__dirname, './src/public'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, './src/core/store'),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, './src/services'),
      },
      {
        find: '@types',
        replacement: resolve(__dirname, './src/types'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, './src/shared/utils'),
      },
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
})
