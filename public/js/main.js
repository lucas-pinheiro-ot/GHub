const socket = io();

console.log('script loaded')

socket.on('message', message => {
    console.log('message');
})