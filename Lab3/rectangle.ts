// Eec. 1
export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}


