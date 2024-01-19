import { toRefs, reactive } from "vue";
const state = reactive({ isOpen: false });

export default () => {
  const { isOpen } = toRefs(state);

  function toggle() {
    state.isOpen = !state.isOpen;
  }

  function close() {
    if (state.isOpen) {
      state.isOpen = false;
    }
  }

  return { isOpen, toggle, close };
};
