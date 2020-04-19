var fetch = require('node-fetch');

function getVehicles() {
    return fetch('http://localhost:3000/vehicle')
            .then((data) => {
                return data.json();
            })
            .then((vehicles) => {
                var allTripsPromises = vehicles.map((vehicle) => {
                    return fetch('http://localhost:3000/getTripsForVehicle/'+vehicle.number)
                            .then(data => data.json())
                            .then(vehicles => vehicles);
                });
                return Promise.all(allTripsPromises);
            });
}

var vehicles = getVehicles();
vehicles;

async function getVehiclesNew() {
    var getVehiclesRequest = await fetch('http://localhost:3000/vehicle');
    var vehiclesData = await getVehiclesRequest.json();

    return await Promise.all(vehiclesData.map(async function(vehicle) {
        var getVehicleTripsRequest = await fetch('http://localhost:3000/getTripsForVehicle/'+vehicle.number);
        var vehicleTripsData = await getVehicleTripsRequest.json();
        return vehicleTripsData;
    }))
}

var allTripsOfAllVehicles = getVehiclesNew();
allTripsOfAllVehicles;