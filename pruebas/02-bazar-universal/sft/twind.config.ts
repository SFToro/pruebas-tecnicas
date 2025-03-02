import { Options } from "$fresh/plugins/twind.ts";
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
// import * as colors from "https://unpkg.com/twind/colors/colors.js";
import * as colors from "https://raw.githubusercontent.com/tw-in-js/twind/v0.16/src/colors/index.ts";

import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
  }),
  selfURL: import.meta.url,
  theme: {
    extend: {
      gridTemplateRows: {
        "product_card": "auto auto 1fr",
      },
      colors: {
        ...colors,
      },
    },
  },
} as Options;
