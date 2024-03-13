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

export class Rectangle {
    points: Array<Point>;

    constructor(...points: Array<Point>) {
        this.points = new Array<Point>;
        points.forEach(p => {
            if(this.points.length == 4) {
                return;
            }
            this.points.push(p);
        });
    }

    move(dx: number, dy: number) {
        this.points.forEach(p => {
            p.move(dx, dy);
        });
    }

    getArea() : number {
        let a : Point = this.points[0];
        let distances : Array<number> = [];
        
        for (let i = 1; i < this.points.length; i++) {
            const p = this.points[i];
            
            // Calculate distance to point
            let dist : number = Math.sqrt((a.x - p.x)**2 + (a.y - p.y)**2);
            distances.push(dist);
        }

        let min : number = distances[0];
        for (let i = 1; i < distances.length; i++) {
            if(distances[i] < min) {
                min = distances[i];
            }
        }

        return min*min;
    }
}

let pa : Point = new Point(0,0);
let pb : Point = new Point(0,1);
let pc : Point = new Point(1,0);
let pd : Point = new Point(1,1);

let rect : Rectangle = new Rectangle(pa, pb, pc, pd);
console.log(rect.points);

console.log(rect.getArea());
rect.move(2,2);
console.log(rect.getArea());

pa = new Point(0,1);
pb = new Point(0,-1);
pc = new Point(1,0);
pd = new Point(-1,0);

rect = new Rectangle(pd,pa,pb,pc);
console.log(rect.points);
console.log(rect.getArea());
rect.move(2,-1);
console.log(rect.getArea());
