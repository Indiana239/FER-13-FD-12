import container from "./container.js";
import promise from "./promise.js";
import spinner from "./spinner.js";

export default function card() {
  return {
    execute: async function (animal) {
      try {
        container().hide();
        spinner().show();
        await promise(() => {
          container().show(animal);
        }, 3_000);
        spinner().hide();
      } catch (error) {
        spinner().hide();
        console.error(error);
      }
    },
  };
}
