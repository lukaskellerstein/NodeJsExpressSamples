// import { NatsService } from "utf-core";
import fetch from "node-fetch";
import puppeteer from "puppeteer-core";

export let broker: any;
export let browser: puppeteer.Browser;

try {
  // Connect to the NATS
  // broker = new NatsService();
  // await broker.connect();

  // GET Websocket URL
  const response = await (
    await fetch("http://127.0.0.1:9222/json/version")
  ).json();
  const wsChromeEndpointurl = response["webSocketDebuggerUrl"];

  // Connect to the browser
  browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndpointurl,
  });
} catch (err) {
  console.log(`error in init`, err);
}
