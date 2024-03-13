"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
// Eec. 1
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        var _this = this;
        this.points = new Array;
        points.forEach(function (p) {
            if (_this.points.length == 4) {
                return;
            }
            _this.points.push(p);
        });
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.points.forEach(function (p) {
            p.move(dx, dy);
        });
    };
    Rectangle.prototype.getArea = function () {
        var a = this.points[0];
        var distances = [];
        for (var i = 1; i < this.points.length; i++) {
            var p = this.points[i];
            // Calculate distance to point
            var dist = Math.sqrt(Math.pow((a.x - p.x), 2) + Math.pow((a.y - p.y), 2));
            distances.push(dist);
        }
        var min = distances[0];
        for (var i = 1; i < distances.length; i++) {
            if (distances[i] < min) {
                min = distances[i];
            }
        }
        return min * min;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var pa = new Point(0, 0);
var pb = new Point(0, 1);
var pc = new Point(1, 0);
var pd = new Point(1, 1);
var rect = new Rectangle(pa, pb, pc, pd);
console.log("RECT POINTS");
console.log(rect.points);
console.log("RECT AREA: " + rect.getArea());
rect.move(2, 2);
console.log("MOVED RECT AREA: " + rect.getArea());
pa = new Point(0, 1);
pb = new Point(0, -1);
pc = new Point(1, 0);
pd = new Point(-1, 0);
rect = new Rectangle(pd, pa, pb, pc);
console.log("RECT POINTS");
console.log(rect.points);
console.log("RECT AREA: " + rect.getArea());
rect.move(2, -1);
console.log("MOVED RECT AREA: " + rect.getArea());
