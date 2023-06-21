import { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  plugins: [createAutoAnimatePlugin()],
  config: {
    classes: generateClasses({
      global: {
        fieldset: "max-w-md border border-gray-400 px-2 pb-1",
        help: "text-xs text-gray-600",
        inner:
          "formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none",
        label: "block text-c-black text-sm leading-none mb-2",
        input:
          "px-4 py-3.5 flex items-center w-full appearance-none transition duration-300 ease-in-out text-c-black text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-accent",
        legend: "font-bold text-sm",
        loaderIcon: "inline-flex items-center w-4 text-gray-600 animate-spin",
        message: "text-red-500 mb-1 text-xs",
        messages: "list-none p-0 mt-1 mb-0",
        outer: "formkit-disabled:opacity-50",
        prefixIcon:
          "w-10 flex self-stretch grow-0 shrink-0 border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
        suffixIcon:
          "w-7 pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
      },
      "family:button": {
        input:
          "$reset mt-6 inline-flex items-center button button--primary text-white text-sm font-normal formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",
        wrapper: "",
        prefixIcon: "$reset block w-4 -ml-2 mr-2 stretch",
        suffixIcon: "$reset block w-4 ml-2 stretch",
      },
    }),
  },
  messages: {},
};

export default config;
