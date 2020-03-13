import Phaser from 'phaser'

export default class Create extends Phaser.Scene {
  constructor() {
    super('create')
  }

  create() {
    this.add.image(400, 300, 'sky')

    const particles = this.add.particles('red')

    const emitter = particles.createEmitter({
      speed: 10,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    const logo = this.physics.add.image(400, 100, 'logo')
    logo.setVelocity(100, 20)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.startFollow(logo)
  }
}
