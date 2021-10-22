import { Point } from "./Point";
export abstract class Shape {
  abstract getType(): string;
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw "Shape need 3 points, 2 poitns is just a line";
    }
    this.points = points;
    this.color = color ?? "green";
    this.filled = filled ?? true;
  }

  toString(): string {
    let fill = this.filled ? "filled" : "not filled";
    let points = this.points
      .map((e) => e.toString())
      .toString()
      .replace(/,\(/gm, ", (");
    return `A Shape with color of ${this.color} and ${fill}. Points: ${points}.`;
  }

  getPerimeter(): number {
    let sum = 0;
    let tmp = this.points[0].distance(this.points[this.points.length-1])
    for (let i = 0; i < this.points.length-1; i++) {
      sum += this.points[i].distance(this.points[i + 1]);
    }
    return tmp + sum;
  }
}
