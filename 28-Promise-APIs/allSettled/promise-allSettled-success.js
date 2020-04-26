const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 100)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 300)
});

// Promise.allSettled
// Returns a promise after all the given promises are resolved or rejected
function getAllData() {
    Promise.allSettled([promise1, promise2, promise3])
        .then((result) => {
            console.log('SUCCESS ' + result);
            result.forEach((res) => {
                console.log(res.status);
            })
        });
}

getAllData();
