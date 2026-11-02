import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; //
export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(), // This makes Tailwind "see" your classes
  ],
  build: {
    target: "es2015", // Down-compiles your JS code bundle
    cssTarget: "chrome61", // Stops Vite from compressing output back into modern shorthand rules
  },
});
