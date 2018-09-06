const express = require('express');
const route = require('./routeHandler');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

// this will route the coming request to route file.

app.get('/getCoins', async (req, resp)=> {
  const finalResponse = await route(req);
  console.log('---------------------',finalResponse);
  resp.send(finalResponse);
  
  // route(req).then((results)=> {
  //   console.log('----RESPONSE FROM TRANSACTION----', results);
  //   resp.setHeader('Content-Type', 'application/json');
  //   resp.status(400).send.results;
  // })
})

app.get('/', (req, resp)=>{ 
  // console.log(__dirname);
  resp.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));
