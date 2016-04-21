'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

console.log('port: ', port);
console.log('host: ', app.get('host'));


server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);