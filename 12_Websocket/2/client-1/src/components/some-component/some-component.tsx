import React, { useEffect } from "react";

const SomeComponent = () => {
  const url = "ws://localhost:8085";
  const connection = new WebSocket(url);

  connection.onopen = () => {
    console.log("SomeComponent", "WS", "onOpen");
  };

  connection.onerror = (error) => {
    console.log("SomeComponent", "WS", `WebSocket error: ${error}`);
  };

  connection.onmessage = (e) => {
    console.log("SomeComponent", "WS", "onmessage", e.data);
  };

  const send2WS = () => {
    connection.send(
      JSON.stringify({
        topic: "topic-1",
        payload: {
          message: "some-text",
        },
      })
    );
  };

  return (
    <>
      <div>SOMETHING</div>
      <input type="text" />
      <button onClick={send2WS}>Send 2 WS</button>
    </>
  );
};

export default SomeComponent;
