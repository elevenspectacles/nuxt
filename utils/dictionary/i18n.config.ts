import en from "./en";
import bg from "./bg";

export default defineI18nConfig(() => ({
  lazy: true,
  messages: {
    ...en,
    ...bg,
  },
}));
