// import WebSocket from 'ws';

// const ws = new WebSocket('ws://localhost:8085/path');

// ws.on('open', function open() {
//     ws.send('something');
// });

// ws.on('message', function message(data) {
//     console.log('received: %s', data);
// });



const WebSocket = require('ws')
const url = 'ws://localhost:8085'
const connection = new WebSocket(url)

connection.onopen = () => {
    console.log("client-1", "onOpen");
    connection.send('Message From Client 1');

    // connection.send({
    //     topic: "/some-topic-1",
    //     payload: {
    //         from: "client-1",
    //         text: "some-text"
    //     }
    // })
}

connection.onerror = (error) => {
    console.log("client-1", `WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
    console.log("client-1", "onmessage", e.data)
}
