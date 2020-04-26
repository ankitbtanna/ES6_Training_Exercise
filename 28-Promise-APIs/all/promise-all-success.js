const fetch = require('node-fetch');

const promises = [
    fetch('http://localhost:3000/carManufacturers'),
    fetch('http://localhost:3000/timezones'),
    fetch('http://localhost:3000/states'),
    fetch('http://localhost:3000/countries')
];

// Promise.all
// When all promises have been fulfilled
// or
// one of them is rejected
async function getAllData() {
    Promise.all(promises)
        .then(async (res) => {
            return {
                carManufacturers: {
                    status: res[0].status,
                    statusText: res[0].statusText,
                    body: await res[0].json()
                },
                timezones: {
                    status: res[1].status,
                    statusText: res[1].statusText,
                    body: await res[1].json()
                },
                states: {
                    status: res[2].status,
                    statusText: res[2].statusText,
                    body: await res[2].json()
                },
                countries: {
                    status: res[3].status,
                    statusText: res[3].statusText,
                    body: await res[3].json()
                }
            };
        })
        .then((response) => {
            console.log(response)
        });
}

getAllData();
