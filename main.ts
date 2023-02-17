let message = 'abc';
let endsWithC = message.endsWith('c')

let log = function(message){
    console.log(message)
}

let doLog = (message)=> console.log(message)

class Point {
    x:number;
    y:number;

    draw(){
        console.log('x: ' +this.x + ', Y: '+ this.y)
    }

    getDistance(another: Point){
    //..
}

}

let point1 = new Point();
point1.x = 1
point1.y = 2
point1.draw();