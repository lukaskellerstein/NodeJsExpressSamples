import { NatsService } from "./nats-service.js";

import randomWords from "random-words";

console.log('client-2', "start");

try {

    const natsService = new NatsService();
    await natsService.connect();

    const topic = "some-topic";
    setInterval(() => {
        const randomWord = randomWords();
        natsService.publish(topic, randomWord);
        console.log('client-2', "published", randomWord);
    }, 1000);

} catch (err) {
    console.log(`error connecting to ${JSON.stringify(v)}`);
}

console.log('client-2', "ends");




// try {

//     // to create a connection to a nats-server:
//     const nc = await connect({ servers: "127.0.0.1:4222" });
//     const topic = "some-topic";

//     console.log('client-2', "connected");

//     // this promise indicates the client closed
//     // const done = nc.closed();
//     // console.log('client-2', "isClosed", done);

//     // ----------------------------------------
//     // DO SOMETHING

//     // create a codec
//     const sc = StringCodec();


//     setInterval(() => {

//         const randomWord = randomWords();
//         nc.publish(topic, sc.encode(randomWord));

//         console.log('client-2', "published", randomWord);

//     }, 1000);

//     console.log('client-2', "published");
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
