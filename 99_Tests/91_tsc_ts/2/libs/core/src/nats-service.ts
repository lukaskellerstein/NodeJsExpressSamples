import { connect, Codec, NatsConnection, JSONCodec } from "nats";

export class NatsService {
  private url: string;
  private codec: Codec<any>;
  private connection: NatsConnection;

  constructor(url = "127.0.0.1:4222") {
    try {
      this.url = url;
      this.codec = JSONCodec();
    } catch (err) {
      console.log(`error during connection`, err);
    }
  }

  public async connect(user = "alice", password = "foo") {
    try {
      this.connection = await connect({
        servers: this.url,
        user: user,
        pass: password,
      });
    } catch (err) {
      console.log(`error during connection`, err);
    }
  }

  public publish(topic: string, message: object) {
    try {
      this.connection.publish(topic, this.codec.encode(message));
      console.log("NatsService", "published", message);
    } catch (err) {
      console.log(`error during publish`, err);
    }
  }

  public subscribe(topic: string) {
    return this.connection.subscribe(topic);
  }

  public decode(message: Uint8Array) {
    try {
      return this.codec.decode(message);
    } catch (err) {
      console.log(`error during decode`, err);
    }
  }

  public async desctructor() {
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
    } catch (err) {
      console.log(`error during destructor`, err);
    }
  }
}
