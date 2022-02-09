import { NatsService } from "./nats-service.js";
import { StringCodec } from "nats";

console.log('client-1', "start");

try {

    const natsService = new NatsService();
    await natsService.connect();

    const topic = "some-topic";
    const subscription = natsService.subscribe(topic);

    // can we remove it somehow?
    const sc = StringCodec();

    for await (const m of subscription) {
        console.log(`[${subscription.getProcessed()}]: ${sc.decode(m.data)}`);
    }
    console.log("subscription closed");

    // // invoke a new Async function to read the subscription messages
    // (async () => {
    //     for await (const m of sub) {
    //         console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    //     }
    //     console.log("subscription closed");
    // })();

} catch (err) {
    console.log(`error connecting`, err);
}

console.log('client-1', "ends");

// try {

//     // to create a connection to a nats-server:
//     const nc = await connect({ servers: "127.0.0.1:4222" });
//     const topic = "some-topic";

//     console.log('client-1', "connected");

//     // this promise indicates the client closed
//     // const done = nc.closed();
//     // console.log('client-1', "isClosed", done);

//     // ----------------------------------------
//     // DO SOMETHING

//     // create a codec
//     const sc = StringCodec();
//     // create a simple subscriber and iterate over messages
//     const sub = nc.subscribe(topic);
//     (async () => {
//         for await (const m of sub) {
//             console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
//         }
//         console.log("subscription closed");
//     })();

//     console.log('client-1', "subscribed");
//     // ----------------------------------------

//     // // close the connection
//     // await nc.close();
//     // // check if the close was OK
//     // const err = await done;
//     // if (err) {
//     //     console.log(`error closing:`, err);
//     // }

// } catch (err) {
//     console.log(`error connecting to ${JSON.stringify(v)}`);
// }
