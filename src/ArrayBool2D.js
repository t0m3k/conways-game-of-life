class Array2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.array = new Array(x * y);

    this.item = (x, y) => {
      const outOfBoundary = { value: false, oob: true };

      if (x >= this.x || y >= this.y) return outOfBoundary;

      if (x < 0 || y < 0) return outOfBoundary;

      console.log(x + this.x * y);

      console.log(x, y);

      return this.array[x + this.x * y];
    };

    for (let i = 0; i < x * y; i++) {
      const eX = i % y;
      const eY = Math.floor(i / y);
      this.array[i] = {
        value: true,
        x: eX,
        y: eY,
        set: function (value) {
          this.value = value;
          return this;
        },
        item: (x, y) => {
          return this.item(x, y);
        },
        get: function () {
          return this.value;
        },
        above: () => {
          return this.item(eX, eY + 1);
        },
        below: function () {
          return this.item(eX, eY - 1);
        },
        left: () => {
          return this.item(eX - 1, eY);
        },
        right: () => {
          return this.item(eX + 1, eY);
        },
        neighbours: () => {
          return (
            this.item(eX, eY).above().value +
            this.item(eX, eY).below().value +
            this.item(eX, eY).left().value +
            this.item(eX, eY).right().value +
            this.item(eX, eY).right().above().value +
            this.item(eX, eY).right().below().value +
            this.item(eX, eY).left().above().value +
            this.item(eX, eY).left().below().value
          );
        },
      };
    }
  }
}

const arr = new Array2D(3, 5);

console.log(arr.item(1, 1).neighbours());
