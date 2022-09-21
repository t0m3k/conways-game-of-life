const width = 500;
const height = 500;
const game = new GameOfLife(150, 150);
const gameState = new GameState(GameState.states.PAUSED);
function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent("myContainer");
  background(15);
  frameRate(5);
  game.random($("#fillChanceInput").val());
}

function draw() {
  // gameState.checkState();

  let alive = 0;
  game.forEach((element, x, y) => {
    const elementState = element.state();

    switch (elementState) {
      case cellState.ALIVE:
        fill(255);

        alive++;
        break;
      case cellState.COMING_TO_LIFE:
        fill(0);
        break;
      case cellState.DYING:
        fill(255);

        alive++;
        break;

      default:
        fill(0);
        break;
    }

    rect(
      1 + ((width - 2) / game.x) * x,
      1 + ((height - 2) / game.y) * y,
      width / game.x,
      height / game.y
    );
  });

  if (gameState.state === GameState.states.RUNNING || gameState.goStep()) {
    game.forEach((item) => item.next());
  }

  $("#aliveCells").html(alive);
}
