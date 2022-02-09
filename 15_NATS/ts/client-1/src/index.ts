import { NatsService } from "./nats-service.js";

console.log("client-1", "start");

try {
  const natsService = new NatsService();
  await natsService.connect();

  const topic = "some-topic";
  const subscription = natsService.subscribe(topic);

  for await (const m of subscription) {
    console.log(
      `[${subscription.getProcessed()}]: ${JSON.stringify(
        natsService.decode(m.data),
        null,
        2
      )}`
    );
  }
  console.log("subscription closed");
} catch (err) {
  console.log(`error connecting`, err);
}

console.log("client-1", "ends");
