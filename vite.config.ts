// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Public (publishable) backend settings. They are safe to ship in the browser bundle.
// Fallback used when the build environment has no .env file (the published build
// previously shipped without them, leaving a blank screen).
const PUBLIC_BACKEND_URL =
  process.env.VITE_SUPABASE_URL || "https://iqnlxsvjwrhgjxldiplm.supabase.co";
const PUBLIC_BACKEND_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_6S2kGqmnifo6KKMAHgNaPA_2eRTOqfT";
const PUBLIC_BACKEND_PROJECT_ID = process.env.VITE_SUPABASE_PROJECT_ID || "iqnlxsvjwrhgjxldiplm";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(PUBLIC_BACKEND_URL),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(PUBLIC_BACKEND_KEY),
      "import.meta.env.VITE_SUPABASE_PROJECT_ID": JSON.stringify(PUBLIC_BACKEND_PROJECT_ID),
    },
  },
});
