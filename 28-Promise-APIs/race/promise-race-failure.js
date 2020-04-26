const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 500)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 100)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 300)
});

// Promise.race
// Returns a promise that fulfills or rejects as soon as possible
function getAllData() {
    Promise.race([promise1, promise2, promise3])
        .then((result) => {
            console.log('SUCCESS ' + result);
        })
        .catch((error) => {
            console.log('ERROR ' + error)
        })
}

getAllData();
