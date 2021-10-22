import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  point1: Point;
  point2: Point;
  point3: Point;

  constructor(point1: Point, point2: Point, point3: Point);
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color: string,
    filled: boolean
  );
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color?: string,
    filled?: boolean
  ) {
    if (!color || !filled) super([point1, point2, point3]);
    else super([point1, point2, point3], color, filled);

    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }

  toString(): string {
    return `Triangle[${this.points.map(
      (e, i) => `v${i + 1}=${e.toString()}`
    )}]`;
  }

  getType() {
    let a = this.point1.distance(this.point2);
    let b = this.point2.distance(this.point3);
    let c = this.point3.distance(this.point1);

    if (a === b && a === c) {
      return "equilateral triangle";
    } else if (a === b || b === c || a === c) {
      return "isosceles triangle";
    }
    return "scalene triangle";
  }
}
