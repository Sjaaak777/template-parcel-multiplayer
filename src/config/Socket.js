import io from 'socket.io-client'

let socket
const env = process.env.NODE_ENV

export default function setupSocket(game) {
  const g = game

  if (env === 'production') {
    socket = io()
  } else {
    socket = io('http://localhost:4001')
  }

  socket.on('you-are-connected', function() {
    console.error('You are connected!')
  })

  socket.on('someone-else-connected', function() {
    console.error('Someone else connected!')
  })
}
