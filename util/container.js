import selector from "./selector.js";
import animals from "../constant/data.js";

export default function container() {
  return {
    selector: {
      container: selector(".container"),
      image: selector(".images"),
      description: selector(".desc"),
      modal: selector(".modal"),
      notFound: selector(".not-found"),
      input: selector(".input"),
    },
    get: function (choice) {
      const selected = animals.find((animal) => animal.key === choice);
      return choice ? selected : null;
    },
    show: function (choice) {
      const animal = this.get(choice);
      this.selector.container.style.visibility = "visible";
      this.selector.image.style.visibility = "visible";
      this.selector.image.src = animal.imageSource;
      this.selector.description.textContent = animal.description;
    },
    hide: function () {
      this.selector.container.style.visibility = "hidden";
      this.selector.image.style.visibility = "hidden";
      this.selector.description.textContent = "";
      this.selector.notFound.textContent = "";
    },
    notFound: function (value) {
      this.selector.description.textContent = "";
      this.selector.image.style.visibility = "hidden";
      this.selector.notFound.textContent = `${value} is not found`;
    },
  };
}
