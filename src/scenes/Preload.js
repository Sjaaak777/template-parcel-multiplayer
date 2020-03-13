import Phaser from 'phaser'
import sky from '../assets/skies/space3.png'
import logo from '../assets/sprites/phaser3-logo.png'
import particle from '../assets/particles/red.png'

export default class Preload extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image('sky', sky)
    this.load.image('logo', logo)
    this.load.image('red', particle)
  }

  create() {
    this.scene.start('create')
  }
}
