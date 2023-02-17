var message = 'abc';
var endsWithC = message.endsWith('c');
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
var point1 = new Point();
point1.x = 1;
point1.y = 2;
point1.draw();
