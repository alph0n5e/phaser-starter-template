import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png')
  }

  create() {
    const logo = this.add.image(320, 180, 'logo')

    this.tweens.add({
      targets: logo,
      y: 100,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }
}