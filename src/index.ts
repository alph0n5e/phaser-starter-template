import Phaser from 'phaser'

import GameScene from './scenes/GameScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 640,
    height: 360
  },
  scene: [GameScene]
};

new Phaser.Game(config);