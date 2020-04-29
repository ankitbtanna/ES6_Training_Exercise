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

// Promise.allSettled - ALL promises are RESOLVED/REJECTED
Promise.allSettled([promise1, promise2, promise3])
    .then((response) => {
        console.log(response);
    })