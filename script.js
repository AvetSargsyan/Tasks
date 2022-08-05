"use strict";
//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
let animal = [];
let cat = []
animal.canMove = true ;
console.log(animal);
Object.assign(cat , animal );
console.log(cat);



