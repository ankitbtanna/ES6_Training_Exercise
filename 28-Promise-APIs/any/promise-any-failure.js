const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 resolved');
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 resolved');
    }, 100)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 resolved');
    }, 300)
});

// Promise.any
// Returns a promise after any ONE promise
function getAllData() {
    Promise.any([promise1, promise2, promise3])
        .then((result) => {
            console.log('SUCCESS ' + result);
            result.forEach((res) => {
                console.log(res.status);
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

getAllData();
