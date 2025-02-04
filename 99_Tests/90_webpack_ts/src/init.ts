// import { NatsService } from "utf-core";
// import fetch from "node-fetch";
import * as puppeteer from "puppeteer-core";
import { DaemonContext } from "./context";

export class StepInit {
  async Run() {
    try {
      // Connect to the NATS
      // broker = new NatsService();
      // await broker.connect();

      // GET Websocket URL
      // const response = await (
      //   await fetch("http://127.0.0.1:9222/json/version")
      // ).json();
      // const wsChromeEndpointurl = response["webSocketDebuggerUrl"];
      const wsChromeEndpointurl = "";

      // Connect to the browser
      DaemonContext.browser = await puppeteer.connect({
        browserWSEndpoint: wsChromeEndpointurl,
      });

      DaemonContext.browser = null;

      console.log("asdfadfasfafasdfaf");
    } catch (err) {
      console.log(`error in init`, err);
    }
  }
}
