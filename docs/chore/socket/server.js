const express = require('express')
const SocketServer = require('ws').Server;

const PORT = 3000

const server = express().listen(PORT, () => {
  return console.log(`Listening on ${PORT}`)
})

const wss = new SocketServer({ server })

wss.on('connection', (ws) => {
  console.log('Client connected')

  // ws.on('message', (data) => {
  //   console.log(data)
  //   ws.send(data)
  // })

  // const sendNowTime = setInterval(() => {
  //     ws.send(String(new Date()));
  //  }, 1000);

  ws.on('message', (data) => {
    let clients = wss.clients;
    console.log(data)
    clients.forEach((item) => {
      item.send(data)
    })
  })

  ws.on('close', () => {
    console.log('Close connected')
  })

})