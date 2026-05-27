import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),

    /**
     * @see {@link https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#react-compiler}
     */
    babel({
      presets: [reactCompilerPreset()],
    }),

    tailwindcss(),
  ],
})
