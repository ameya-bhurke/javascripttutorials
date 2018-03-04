 'use strict';
 
 class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calculateArea(); 
    }

    calculateArea() {
        return this.height * this.width;
    }
}

var r = new Rectangle(3, 5);
console.log(r.area);
console.log(r.calculateArea());