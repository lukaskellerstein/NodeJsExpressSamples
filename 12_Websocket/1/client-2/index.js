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
    connection.send('Message From Client 2')
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
    console.log("client-2", "onmessage", e.data)
}