import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; //

export default defineConfig({
  base: "/D-Rahim/", // Set the base path for GitHub Pages

  plugins: [
    tailwindcss(), // This makes Tailwind "see" your classes
  ],
});
