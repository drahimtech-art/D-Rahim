import tailwindcss from "@tailwindcss/postcss";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss(), // 1. Run the Tailwind v4 compilation engine
    postcssPresetEnv({
      stage: 2,
      features: {
        // Fixes: Converts Tailwind v4 native `@layer` blocks so old browsers can read them
        "cascade-layers": true,
        // Fixes: Force converts modern `min-[1000px]:` (width >= 1000px) to classic (min-width: 1000px)
        "media-query-ranges": true,
        // Fixes: Translates space-separated opacity and oklch functions into standard rgba()
        "color-functional-notation": true,
      },
    }),
    autoprefixer(), // 3. Inject vendor prefixes (-webkit-) for older mobile viewports
  ],
};
