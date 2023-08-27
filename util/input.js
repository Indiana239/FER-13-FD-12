import choices from "../constant/choices.js";
import container from "./container.js";
import promise from "./promise.js";
import selector from "./selector.js";
import spinner from "./spinner.js";

export default function input() {
  return {
    selector: selector(".input").value,
    search: async function () {
      try {
        const TIMEOUT = 3000;
        spinner().show();
        this.selector = "";
        switch (this.selector.toLowerCase()) {
          case choices.animals.CAT:
            container().hide();
            await promise(() => {
              container().show(choices.animals.CAT);
            }, TIMEOUT);
            break;
          case choices.animals.DOG:
            container().hide();
            await promise(() => {
              container().show(choices.animals.DOG);
            }, TIMEOUT);
            break;
          case choices.animals.CHICK:
            container().hide();
            await promise(() => {
              container().show(choices.animals.CHICK);
            }, TIMEOUT);
            break;
          default:
            container().hide();
            await promise(() => {
              container().notFound(this.selector);
            }, TIMEOUT);
        }
        spinner().hide();
      } catch (error) {
        spinner().hide();
        console.error(error);
      }
    },
  };
}
