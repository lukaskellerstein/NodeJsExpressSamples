const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8085 });

wss.on('connection', (ws) => {
    console.log('server', "new connection");

    ws.on('message', (data) => {
        console.log('server', 'received: %s', data.toString());

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    });

    console.log('server', "send message back to client after connect");
    ws.send('thanks for connection');
});


