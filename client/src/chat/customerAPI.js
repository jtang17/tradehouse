import openSocket from 'socket.io-client';

const port = process.env.PORT || 5421;
// const socket = openSocket(`http://localhost:${port}`); // TODO: fix for deployment?

function subscribeToTimer(interval, cb) {
  // socket.on('timer', timestamp => cb(null, timestamp));
  // socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };
