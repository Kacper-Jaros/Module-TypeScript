export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(x: Point): number;
  distance(x: number, y: number): number;

  distance(x?: Point | number, y?: number): number {
    if (typeof x !== "number") {
      if (typeof x === "undefined") {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      let paramOne = x.x - this.x;
      let paramTwo = x.y - this.y;
      return Math.round(Math.sqrt(paramOne * paramOne + paramTwo * paramTwo)*100)/100;
    }
    let paramOne = x - this.x;
    let paramTwo = y - this.y;
    return Math.round(Math.sqrt(paramOne * paramOne + paramTwo * paramTwo)*100)/100;
  }
}
