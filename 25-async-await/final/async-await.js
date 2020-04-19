function getAllVehicles() {
    let vehicles = [];
    fetch('http://localhost:3000/vehicle')
    .then((data) => {
        vehicles = data;
    })

    return vehicles;
}

let myVehicles = getAllVehicles();