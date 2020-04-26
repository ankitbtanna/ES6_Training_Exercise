const fetch = require('node-fetch');

const promises = [
    fetch('http://localhost:3000/carManufacturers'),
    fetch('http://localhost:3000/timezones'),
    fetch('https://some-fake-url/demo/posts'),
    fetch('http://localhost:3000/countries')
];

// Promise.all
// When all promises have been fulfilled
// or
// one of them is rejected
async function getAllData() {
    await Promise.all(promises)
        .then(async (res) => {
            return await res[0].json()
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log('#############', err)
        });
}

getAllData();
