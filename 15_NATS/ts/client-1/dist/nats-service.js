import { connect, JSONCodec } from "nats";
export class NatsService {
    constructor(url = "127.0.0.1:4222") {
        try {
            this.url = url;
            this.codec = JSONCodec();
        }
        catch (err) {
            console.log(`error during connection`, err);
        }
    }
    async connect(user = "alice", password = "foo") {
        try {
            this.connection = await connect({
                servers: this.url,
                user: user,
                pass: password,
            });
        }
        catch (err) {
            console.log(`error during connection`, err);
        }
    }
    publish(topic, message) {
        try {
            this.connection.publish(topic, this.codec.encode(message));
            console.log("NatsService", "published", message);
        }
        catch (err) {
            console.log(`error during publish`, err);
        }
    }
    subscribe(topic) {
        try {
            return this.connection.subscribe(topic);
        }
        catch (err) {
            console.log(`error during subscribe`, err);
        }
    }
    decode(message) {
        try {
            return this.codec.decode(message);
        }
        catch (err) {
            console.log(`error during decode`, err);
        }
    }
    async desctructor() {
        try {
            // this promise indicates the client closed
            const done = this.connection.closed();
            // close the connection
            await this.connection.close();
            // check if the close was OK
            const err = await done;
            if (err) {
                console.log(`error closing:`, err);
            }
        }
        catch (err) {
            console.log(`error during destructor`, err);
        }
    }
}
