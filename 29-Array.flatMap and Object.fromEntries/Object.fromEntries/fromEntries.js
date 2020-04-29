const myObject = {x: 1, y: 2, z: 3};
console.log(Object.entries(myObject));
const myObjectEntries = Object.entries(myObject);

const objectFromEntries = Object.fromEntries(myObjectEntries);
console.log(objectFromEntries);

Object.fromEntries(
    Object.entries(myObject).filter((entry) => {
        return entry[1] < 3;
    })
)