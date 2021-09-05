import { checking } from "./business";
import { upload } from "./upload";
import { add } from "./utility";

function main() {
  const left = 2;
  const right = 5;

  const result = add(left + right);

  upload(result);

checking(result);
  console.log("Run here", result);
}

main();
