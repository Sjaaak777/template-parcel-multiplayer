Credits go to: https://github.com/mlpetersen/phaser-socket.io-parcel

Thanks for this working Template :)

# Phaser + Socket.io + Parcel

A bootstrap project for creating games with Phaser + Socket.io + Parcel.

## During development:

Open two terminals. For the server, run:

`npm run dev-server`

The server runs Express on port 4001, and will reload on changes to server.js.

For the client, run:

`npm run dev-client`

The client runs Parcel on port 1337, with hot-reload, and will connect Socket.io to port 4001.

To run the game, open your browser and enter http://localhost:1337 into the address bar.

## Build for deployment:

Run:

`npm start`

This will build the client and serve it with Express on port 1337.

To run the game, open your browser and enter http://localhost:1337 into the address bar.
