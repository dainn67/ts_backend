"use strict";
const getMoreData = (data) => {
    console.log(data.length);
    return data;
};
// inherited classes can also be used
function test(val1, val2) {
    return {
        val1,
        val2,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
function isAdmin(user) {
    return 'isAdmin' in user;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toISOString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(animal) {
    return animal.swim !== undefined;
}
let bird = { fly: () => { console.log('flying'); } };
function getFood(animal) {
    if (isFish(animal)) {
        console.log('Fish food');
    }
    else {
        console.log('Bird food');
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        console.log('A circle with radius', shape.radius);
    }
    else if (shape.kind === 'square') {
        console.log('A square with side', shape.side);
    }
}
