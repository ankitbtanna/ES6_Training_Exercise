const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 100)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 300)
});

// Promise.allSettled - ALL promises are RESOLVED/REJECTED
Promise.allSettled([promise1, promise2, promise3])
    .then((response) => {
        console.log(response);
    })