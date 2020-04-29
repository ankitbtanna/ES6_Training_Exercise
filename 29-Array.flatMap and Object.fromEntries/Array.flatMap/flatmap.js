const myArray = [1, [2, [3]]];
console.log(myArray.flat());
console.log(myArray.flat(2));
console.log(myArray.flat(Infinity));

const newArray = [1, 2, 3];
const duplicateElementsArray = newArray.map((x) => {
    return [x, x];
});
console.log(duplicateElementsArray);
console.log(duplicateElementsArray.flat());

console.log(newArray.flatMap((x) => {
    return [x, x]
}));
