import { MqttService } from "./mqtt-service.mjs";

const mqttService = new MqttService();

const topic1Name = '/some-topic-2'
mqttService.subscribe(topic1Name, (message) => {
    console.log("client-1", 'on message', topic1Name, message.toString());
})





// const mqtt = require('mqtt');

// const host = '127.0.0.1';
// const port = '1883';
// const clientId = 'client-1';

// const connectUrl = `mqtt://${host}:${port}`

// console.log("client-1", 'connecting ....')
// const client = mqtt.connect(connectUrl, {
//     clientId
// });

// const topic1Name = '/some-topic-2'
// // client.on('connect', () => {
// //     console.log("client-1", 'Connected')
// //     client.subscribe([topic], () => {
// //         console.log("client-1", `Subscribe to topic '${topic}'`)
// //     })
// //     client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
// //         if (error) {
// //             console.error(error)
// //         }
// //     })
// // })
// // client.on('message', (topic, payload) => {
// //     console.log("client-1", 'Received Message:', topic, payload.toString())
// // })



// client.on('connect', function () {
//     console.log("client-1", 'Connected');

//     client.subscribe(topic1Name);

//     // client.subscribe('presence', function (err) {
//     //     if (!err) {
//     //         client.publish('presence', 'Hello mqtt')
//     //     }
//     // })
// });

// client.on("error", function (error) {
//     console.log("Can't connect" + error);
// });

// client.on('message', function (topic, message) {
//     console.log("client-1", 'on message', topic, message)

//     if (topic === topic1Name) {
//         console.log(message.toString())
//     }

//     // client.end()
// });