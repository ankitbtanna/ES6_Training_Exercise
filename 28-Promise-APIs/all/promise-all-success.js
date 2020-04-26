const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolve');
    }, 100)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 300)
});

// Promise.all
// When all promises have been fulfilled
// or
// one of them is rejected
function getAllData() {
    Promise.all([promise1, promise2, promise3])
        .then((response) => {
            console.log(response)
        });
}

getAllData();
