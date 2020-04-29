const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 500)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 100)
});

// rejected
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 reject');
    }, 300)
});

Promise.all([promise1, promise2, promise3])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })