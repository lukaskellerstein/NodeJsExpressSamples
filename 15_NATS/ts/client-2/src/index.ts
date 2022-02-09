import { NatsService } from "./nats-service.js";
import randomWords from "random-words";

console.log("client-2", "start");

try {
  const natsService = new NatsService();
  await natsService.connect();

  const topic = "some-topic";
  setInterval(() => {
    const randomWord = randomWords();
    natsService.publish(topic, {
      message: randomWord,
    });
  }, 1000);
} catch (err) {
  console.log(`error connecting`, err);
}

console.log("client-2", "ends");
