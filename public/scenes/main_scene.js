let timer = 0;

Main = {
  // Preload
  preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("star", "assets/star.png");
    this.load.spritesheet("luffy", "assets/luffy.png", {
      frameWidth: 51,
      frameHeight: 41,
    });
  },

  // Create
  create() {
    // Background
    this.add.image(game_width / 2, 300, "sky");
    this.physics.world.setBounds(
      0,
      0,
      game_width,
      game_height,
      true,
      true,
      false,
      true
    );

    // Player
    player = this.physics.add.sprite(100, -41, "luffy").setScale(1.2);

    // Text
    text = this.add.text(
      game_width / 2,
      game_height / 2,
      `Happy\nBirthday!\n:D`,
      {
        fontFamily: "Verdana",
        fontSize: 40,
        color: "#ff0000",
        align: "center",
      }
    );

    text.setOrigin(0.5);
  },

  // Update
  update() {
    console.log(player.body.y);

    if (player.body.y >= 600) {
      player.body.y = -41;
      player.body.x = Math.random() * (game_width - 60) + 30;
      player.body.velocity.y = 0;
    }

    if (timer === 0) {
      this.physics.add.sprite(
        Math.random() * (game_width - 60) + 30,
        -41,
        "star"
      );
    }

    text.x += Math.random() * 2 - 1;
    text.y += Math.random() * 2 - 1;

    increase_timer();
  },
};

function increase_timer() {
  timer = timer + 1;
  if (timer === 12) {
    timer = 0;
  }
}
