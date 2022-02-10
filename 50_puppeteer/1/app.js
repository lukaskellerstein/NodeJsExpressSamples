import puppeteer from 'puppeteer-core';
import fetch from 'node-fetch';
import { WsClient } from './ws-client.js';

import WebSocket from 'ws';

import { NatsService } from './nats-service.js';

(async () => {

  // GET Websocket URL
  const response = await (await fetch("http://127.0.0.1:9222/json/version")).json();
  const wsChromeEndpointurl = response.webSocketDebuggerUrl;

  // Connect to the browser
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndpointurl,
  });


  // Launch a new browser instance
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  //   args: ['--no-sandbox']
  // });

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport({ width: 0, height: 0 });





  // -------------------------------------------------
  // Connect to our Websocket server
  // -------------------------------------------------
  // const wsClient = new WsClient();
  // wsClient.send("test-message");

  const url = 'ws://localhost:8085';
  const connection = new WebSocket(url);

  connection.onopen = () => {
    console.log("client-1", "onOpen");
    connection.send('Message From Client 1');
  };

  connection.onerror = (error) => {
    console.log("client-1", `WebSocket error: ${error}`)
  };

  connection.onmessage = (e) => {
    console.log("client-1", "onmessage", e.data)
  };

  // -------------------------------------------------
  // Connect to our NATS server
  // -------------------------------------------------

  // const natsService = new NatsService();
  // await natsService.connect();




  // ---------------------------------------------------
  // Teams page
  // ---------------------------------------------------
  // Open a Teams in new page
  await page.goto('https://local.teams.office.com');



  // ---------------------------------------------------
  // Subscribe to Synthetic events
  // ---------------------------------------------------

  // let msgCollection = [];

  // Define a window.onMessageReceivedEvent function on the page.
  await page.exposeFunction('onMessageReceivedEvent', e => {
    // console.log(`${e.type} fired`, e);
    // msgCollection.push(e.data);

    if (e.data.action === "settings") {
      console.log(e);

      connection.send(e.data);

      // natsService.publish("some-topic", {
      //   message: e.data,
      // });
    }
  });

  /**
     * Attach an event listener to page to capture a custom event on page load/navigation.
     * @param {string} type Event name.
     * @return {!Promise}
     */
  function listenFor(type) {
    return page.evaluate(type => {
      window.__TEAMS_DEVTOOLS_GLOBAL_HOOK__.addEventListener(type, e => {
        window.onMessageReceivedEvent({ type, data: e.detail });
      });
    }, type);
  }

  await listenFor("teams-devtools:hook-internal-channel"); // Listen for "message" custom event on page load.







})();