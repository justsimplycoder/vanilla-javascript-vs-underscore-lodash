const und = require('underscore');
const lod = require('lodash');

/**
 * create - Создает объект, который наследуется от объекта-прототипа.
 */

function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

// lodash
Circle.prototype = lod.create(Shape.prototype, {
  'constructor': Circle
});

const circle = new Circle();

console.log("circle instanceof Circle", circle instanceof Circle);
console.log("circle instanceof Shape", circle instanceof Shape);

// Underscore
function Circle2() {
  Shape.call(this);
}

Circle2.prototype = und.create(Shape.prototype, {
  'constructor': Circle2
});

const circle2 = new Circle2();

console.log("circle2 instanceof Circle2", circle2 instanceof Circle2);
console.log("circle2 instanceof Shape", circle2 instanceof Shape);

// es6
function Circle3() {
  Shape.call(this);
}

Circle3.prototype = Object.create(Shape.prototype, {
  'constructor': {
    value: Circle3
  }
});

const circle3 = new Circle3();

console.log("circle3 instanceof Circle3", circle3 instanceof Circle3);
console.log("circle3 instanceof Shape", circle3 instanceof Shape);