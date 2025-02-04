console.log("start");

import { DaemonContext } from "./src/context.js";

// INIT -------------------------------
import { Init } from "./src/init.js";

const { broker, browser } = await Init();
console.log(broker, browser);

DaemonContext.broker = broker;
DaemonContext.browser = browser;

// SECOND SCRIPT ----------------------
import { someVar, someFce } from "./src/some-script.js";
console.log(someVar);
someFce();

console.log("end");
