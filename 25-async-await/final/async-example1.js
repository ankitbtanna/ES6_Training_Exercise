var fetch = require('node-fetch');
var a = 5;
var b = 6;
var c = a+b;
c;

// function getVehicles() {
//     fetch('http://localhost:3000/vehicle')
//             .then((data) => {
//                 console.log('Then 1');
//                 return data.json();
//             })
//             .then((data) => {
//                 console.log('Then 2');
//                 return data;
//             });
//     console.log('Hellooo!!!')
// }

// var vehicles = getVehicles();
// vehicles;

// async function getVehicles() {
//     var getVehicleRequest = await fetch('http://localhost:3000/vehicle');
//     var vehiclesData = await getVehicleRequest.json();
//     return vehiclesData;
// }

// getVehicles()
// .then((vehicles) => {
//     console.log(vehicles);
// });