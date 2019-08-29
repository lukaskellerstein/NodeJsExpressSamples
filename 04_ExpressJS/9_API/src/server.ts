import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { cloneDeep } from 'lodash';

import { clusterDatabase } from './db/cluster.db';
import { endpointDatabase } from './db/endpoint.db';
import { getGuid, sleep } from './helpers';

let server = express();

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

let clusterDb = clusterDatabase;
let endpointDb = endpointDatabase;

server.get('/', (req, res) => {
  res.json({
    message: 'Your API is WORKING ...'
  });
});

// --------------------------------------------------
// --------------------------------------------------
// CLUSTERS
// --------------------------------------------------
// --------------------------------------------------

server.get('/clusters', (req, res) => {
  // res.json(clusterDb);

  sleep(1000).then(() => {
    res.json(clusterDb);
  });
});

server.post('/clusters', (req, res) => {
  const itemOrigin = req.body;
  const item = cloneDeep(itemOrigin);
  item.metadata.uid = getGuid();

  clusterDb.push(item);

  res.json(item);
});

server.put('/cluster/:id', (req, res) => {
  let id = req.params.id;
  const itemOrigin = cloneDeep(req.body);

  clusterDb = clusterDb.filter(o => o.metadata.uid !== id);
  clusterDb.push(itemOrigin);

  res.json({});
});

server.get('/cluster/:id', (req, res) => {
  let id = req.params.id;
  const item = clusterDb.filter(o => o.metadata.uid === id);
  res.json(item);
});

// --------------------------------------------------
// --------------------------------------------------
// ENDPOINTS
// --------------------------------------------------
// --------------------------------------------------

server.get('/endpoints', (req, res) => {
  sleep(1000).then(() => {
    res.json(endpointDb);
  });
});

server.post('/endpoints', (req, res) => {
  const itemOrigin = req.body;
  const item = cloneDeep(itemOrigin);
  item.metadata.uid = getGuid();

  endpointDb.push(item);

  res.json(item);
});

server.put('/endpoint/:id', (req, res) => {
  let id = req.params.id;
  const itemOrigin = cloneDeep(req.body);

  endpointDb = endpointDb.filter(o => o.metadata.uid !== id);
  endpointDb.push(itemOrigin);

  res.json({});
});

server.get('/endpoint/:id', (req, res) => {
  let id = req.params.id;
  const item = endpointDb.filter(o => o.metadata.uid === id);
  res.json(item);
});

server.listen(4333, console.log(`server is listening on 4333`));
