import Phaser from 'phaser'
import Preload from "./scenes/Preload";
import Create from "./scenes/Create";
import Socket from "./config/Socket";
import './styles/styles.scss'

// setup socket.io
Socket(this)

new Phaser.Game({
  title: 'Parcel Socket.io Phaser',
  url: 'https://sumo.yoga',
  version: '0.1',
  banner: {
    hidePhaser: true,
  },
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 200,
      },
    },
  },
  scene: [Preload, Create]
})
