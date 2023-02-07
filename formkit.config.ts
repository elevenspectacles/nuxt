import { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  theme: "genesis",
  plugins: [createAutoAnimatePlugin()],
  config: {
    classes: generateClasses({
      text: {
        label: "bg-blue-500",
      },
    }),
  },
  messages: {},
};

export default config;
