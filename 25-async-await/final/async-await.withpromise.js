var fetch = require('node-fetch');

// function fetchVehicles() {
//     return fetch('http://localhost:3000/vehicle')
//     .then((data) => {
//         return data.json();
//     })
//     .then((vehicles) => {
//         var fuelPricePromises = vehicles.map((vehicle) => {
//             return fetch('http://localhost:3000/getTripsForVehicle/'+vehicle.number)
//                     .then((data) => {
//                         return data.json()
//                     })
//                     .then((data) => {
//                         return data;
//                     });
//         });

//         return Promise.all(fuelPricePromises);
//     })
// }

async function fetchVehicles() {
    console.time();
    var vehiclesResponse = await fetch('http://localhost:3000/vehicle');
    var vehicles = await vehiclesResponse.json();
    let trips = await Promise.all(vehicles.map(async (vehicle) => {
        var tripsOfVehicleResponse = await fetch('http://localhost:3000/getTripsForVehicle/'+vehicle.number);
        var tripsOfVehicle = await tripsOfVehicleResponse.json();
        return tripsOfVehicle;
    }));
    console.timeEnd();
    return trips;
}

var result = fetchVehicles();
result;