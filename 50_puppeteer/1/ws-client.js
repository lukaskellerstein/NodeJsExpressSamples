import WebSocket from 'ws';


export class WsClient {

    constructor(url = 'ws://localhost:8085') {
        this.url = url;
        this.connection = new WebSocket(url);

        this.connection.onopen = () => {
            console.log("WsClient", "onOpen");
        };

        this.connection.onerror = (error) => {
            console.log("WsClient", `WebSocket error: ${error}`)
        };

        this.connection.onmessage = (e) => {
            console.log("WsClient", "onmessage", e.data)
        };
    }

    send(message) {
        this.connection.send(message);
    }
}

