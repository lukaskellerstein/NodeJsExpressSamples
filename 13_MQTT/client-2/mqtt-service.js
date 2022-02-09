import * as mqtt from "mqtt";
export class MqttService {
    host = "localhost";
    port = "1883";
    clientId = "client-1234";
    connectUrl;

    client;

    constructor() {
        this.connectUrl = `mqtt://${this.host}:${this.port}`;
        console.log("client-1", "connecting ....");
        this.client = mqtt.connect(this.connectUrl, {
            clientId: this.clientId,
        });
    }

    publish(topic, message) {
        this.client.publish(topic, JSON.stringify(message));
    }

    subscribe(topicName, fce) {
        this.client.on('message', (topic, message) => {

            if (topic === topicName) {
                fce(message);
            }

        });
        this.client.subscribe(topicName);
    }
}

