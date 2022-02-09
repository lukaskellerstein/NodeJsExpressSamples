import React, { useEffect } from "react";

import { NatsService } from "../../services/nats-service";

const SomeComponent = () => {
  const natsService = new NatsService("ws://localhost:8089");

  useEffect(() => {
    (async () => {
      await natsService.connect();
    })();
  });

  const send2Nats = () => {
    natsService.publish("some-topic", {
      message: "some text",
    });
  };

  return (
    <>
      <div>SOMETHING</div>
      <button onClick={send2Nats}>Send 2 NATS</button>
    </>
  );
};

export default SomeComponent;
