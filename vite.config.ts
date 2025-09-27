import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: "/timetable/",
  plugins: [solid(), tailwindcss()],
})
