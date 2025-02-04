import { someVar, someFce } from "./some-script";

console.log("start");

console.log(someVar);
someFce();

import { StepInit } from "./init";

const stepInit = new StepInit();
// await stepInit.Run();

console.log("end");
