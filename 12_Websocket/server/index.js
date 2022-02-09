const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8085 });

wss.on('connection', (ws) => {
    console.log('server', "new connection");

    // ws.on('message', (data) => {
    //     console.log('server', 'received: %s', data.toString());
    // });

    console.log('server', "send message back to client after connect");
    ws.send('thanks for connection');
});


