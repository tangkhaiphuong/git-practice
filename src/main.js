import { upload } from "./upload";
import { add } from "./utility";

function main() {
  const left = 2;
  const right = 5;

  const result = add(left + right);

  upload(result);
  console.log("Run here", result);
}

main();
