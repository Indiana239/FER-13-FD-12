import choices from "./constant/choices.js";
import card from "./util/card.js";
import container from "./util/container.js";
import input from "./util/input.js";
import selector from "./util/selector.js";

const cat = selector(".cat");
const dog = selector(".dog");
const chick = selector(".chick");
const crow = selector(".crow");
const inputBtn = selector(".inputBtn");

cat.addEventListener("click", async function () {
  await card().execute(choices.animals.CAT);
});

dog.addEventListener("click", async function () {
  await card().execute(choices.animals.DOG);
});

chick.addEventListener("click", async function () {
  await card().execute(choices.animals.CHICK);
});

crow.addEventListener("click", async function () {
  container().hide();
});

inputBtn.addEventListener("click", async function () {
  await input().search();
});
