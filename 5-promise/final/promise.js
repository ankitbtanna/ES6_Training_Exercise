var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject('one');
    }, 1000);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('two');
    }, 3000);
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('three');
    }, 2000);
});

var p4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('four');
    }, 4000);
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('five');
    }, 1000);
});

Promise.all([p1, p2, p3, p4, p5]).then(
    (data) => {
        console.log('RESOLVE: All data ' + data);
    },
    (data) => {
        console.log('REJECT: All data ' + data);
    }
)

// function myCustomFetch() {
//     var myPromise = new Promise(function(resolve, reject) {
//         setTimeout(()=>{
//             resolve('Promise completed');
//         }, 2000)
//     });

//     return myPromise;
// }

// myCustomFetch().then(() => {}, () => {});


// var giveAssignmentOnceComplete = new Promise(function(resolve, reject) {
    
//     var isAssignmentComplete = false;
// 	// Asynchronous task
// 	throw 'Sorry, there is an issue!';
// });

// giveAssignmentOnceComplete
// .then(function assignmentAvailable(data) {
//     alert(data);
// }, function assignmentIncomplete(data) {
//     alert(data);
// })
// .catch(function(err) {
//     alert(err);
// })
// .finally(function() {
//     // Loading spinner remove
//     console.log('loading spinner removed')
// });