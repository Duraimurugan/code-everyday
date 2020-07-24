const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.map((element, i) => element + i)); //[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

const array = [1, 2, 3, 4, 5];
const mappingFunction = (v) => v + 1;
mappedArray = array.map(mappingFunction);
console.log(mappedArray);
// [ 2, 3, 4, 5, 6 ]

const customMapping = (array, mappingFunction) => {
    return array.reduce((accumulator, value) => [...accumulator, mappingFunction(value)], []);
}


console.log(customMapping(array, mappingFunction));
// [ 2, 3, 4, 5, 6 ]