import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct single export
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",// Use your repo name here
});
