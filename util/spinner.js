import selector from "./selector.js";

export default function spinner() {
  return {
    selector: selector(".spinner-border"),
    show: function () {
      this.selector.style.display = "inline-block";
    },
    hide: function () {
      this.selector.style.display = "none";
    },
  };
}
