import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './configs/env',
  plugins: [
    react(),
    autoImport({
      imports: ['react', 'mobx', 'ahooks'],
      dts: 'configs/autoImport/auto-imports.d.ts', // 生成自动导入文件声明
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './configs/autoImport/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
})
