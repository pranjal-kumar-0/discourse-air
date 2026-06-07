import { api } from "discourse/lib/api";

export default {
  name: "animate-wave",
  initialize() {
    api.decoratePluginOutlet("header-bottom", () => {
      const wave = document.querySelector(".background-container");
      if (wave) {
        wave.style.animation = "wave-animation 15s ease-in-out infinite";
      }
    });
  },
};
