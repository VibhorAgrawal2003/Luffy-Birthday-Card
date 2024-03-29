// Environment
const game_width = window.innerWidth > 375 ? 375 : window.innerWidth;
const game_height = window.innerHeight > 600 ? 600 : window.innerHeight;

// Game Config
const config = {
  type: Phaser.AUTO,
  width: game_width,
  height: game_height,
  scene: Main,
  parent: game_container,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 360 },
    },
  },
};

// Launch Game
const game = new Phaser.Game(config);
