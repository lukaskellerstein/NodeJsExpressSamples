import { WebSocketServer, WebSocket } from "ws";
import { v4 as uuidv4 } from "uuid";

const wss = new WebSocketServer({ port: 8085 });

const clients: Array<string> = [];
const topics: Map<string, string[]> = new Map<string, string[]>();

type MessageType = "PUBLISH" | "SUBSCRIBE";

type Message = {
  type: MessageType;
  topic: string;
  payload?: object;
};

wss.on("connection", (ws: WebSocket) => {
  console.log("server", "new connection", ws);

  const id = uuidv4();
  clients.push(id);

  ws["id"] = id;

  ws.on("message", (message: Message) => {
    console.log("server", "received: %s", message.toString());

    switch (message?.type) {
      case "PUBLISH":
        const subs = topics.get(message.topic);

        console.log("PUBLISH", ws["id"]);

        break;
      case "SUBSCRIBE":
        break;
      default:
        break;
    }

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // console.log('server', "send message back to client after connect");
  // ws.send('thanks for connection');
});
