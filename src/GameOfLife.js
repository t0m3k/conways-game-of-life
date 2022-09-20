class GameOfLife {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.array = new Array(x * y);

    for (let i = 0; i < x * y; i++) {
      const eX = i % x;
      const eY = Math.floor(i / x);
      this.array[i] = {
        value: 0,
        x: eX,
        y: eY,
        set: function (value) {
          this.value = value;
          return this;
        },
        neighbours: () => {
          return (
            this.item(eX, eY + 1).value +
            this.item(eX + 1, eY + 1).value +
            this.item(eX - 1, eY + 1).value +
            this.item(eX, eY - 1).value +
            this.item(eX + 1, eY - 1).value +
            this.item(eX - 1, eY - 1).value +
            this.item(eX + 1, eY).value +
            this.item(eX - 1, eY).value
          );
        },
        state: () => {
          const item = this.item(eX, eY);
          const neighbours = item.neighbours();
          const value = item.value;
          if (value === 1) {
            if (2 > neighbours || neighbours > 3) {
              item.next = () => item.set(0);
              return cellState.DYING;
            }
            item.next = () => {};
            return cellState.ALIVE;
          }
          if (neighbours === 3) {
            item.next = () => item.set(1);
            return cellState.COMING_TO_LIFE;
          }
          item.next = () => {};
          return cellState.DEAD;
        },
        next: () => {},
      };
    }
  }
  item = (x, y) => {
    if (x >= this.x) return this.item(x - this.x, y);
    if (x < 0) return this.item(x + this.x, y);

    if (y >= this.y) return this.item(x, y - this.y);
    if (y < 0) return this.item(x, y + this.y);

    const itemLocation = x + this.x * y;

    return this.array[itemLocation];
  };

  forEach = (callback) => {
    for (let i = 0; i < this.array.length; i++) {
      const eX = i % this.x;
      const eY = Math.floor(i / this.x);
      callback(this.item(eX, eY), eX, eY, i);
    }
  };

  random = (chance) => {
    this.forEach((it) => {
      it.value = Math.floor(Math.random() * 100) > 100 - chance ? 1 : 0;
    });
  };
}

const cellState = {
  DYING: "DYING",
  COMING_TO_LIFE: "COMING_TO_LIFE",
  ALIVE: "ALIVE",
  DEAD: "DEAD",
};
