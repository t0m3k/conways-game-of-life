const arr = new GameOfLife(150, 150);
const width = 600;
const height = 600;
function setup() {
  let cnv = createCanvas(width, height);
  cnv.parent("myContainer");
  frameRate(15);
}

console.log(arr.x, arr.y);

function draw() {
  background(15);
  for (let x = 0; x < arr.x; x++) {
    for (let y = 0; y < arr.y; y++) {
      arr.item(x, y)?.next();
      const element = arr.item(x, y);
      const elementState = element.state();

      switch (elementState) {
        case state.ALIVE:
          fill(255);
          break;
        // case state.COMING_TO_LIFE:
        //   fill(0, 255, 0);
        //   break;
        case state.DYING:
          fill(255);
          break;

        default:
          fill(0);
          break;
      }

      rect(
        1 + ((width - 2) / arr.x) * x,
        1 + ((height - 2) / arr.y) * y,
        width / arr.x,
        height / arr.y
      );
    }
  }
  for (let x = 0; x < arr.x; x++) {
    for (let y = 0; y < arr.y; y++) {}
  }
}
