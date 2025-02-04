import { NatsService } from "utf-core";
import fetch from "node-fetch";
import puppeteer from "puppeteer-core";

export const Init = async () => {
  try {
    // Connect to the NATS
    let broker = new NatsService();
    await broker.connect();

    // GET Websocket URL
    const response = await (
      await fetch("http://127.0.0.1:9222/json/version")
    ).json();
    const wsChromeEndpointurl = response["webSocketDebuggerUrl"];

    // Connect to the browser
    let browser = await puppeteer.connect({
      browserWSEndpoint: wsChromeEndpointurl,
    });

    return {
      broker: null,
      browser: browser,
    };
  } catch (err) {
    console.log(`error in init`, err);
  }
};
