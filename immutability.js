/**
 * Different ways of cloning an object
 */

let person1 = {
    id: 1,
    name: 'Tom Hanks'
};

let person2 = Object.assign({}, person1, {id: 2});
console.log(person2);
// { id: 2, name: 'Tom Hanks' }

let person3 = {...person1, id: 3};
console.log(person3);
// { id: 3, name: 'Tom Hanks' }

// let person4 = person1.slice();