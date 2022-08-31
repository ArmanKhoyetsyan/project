// var promise = job1();

// promise

// .then(function(data1) {
//     console.log('data1', data1); //'result of job 1'
//     return job2();
// })

// .then(function(data2) {
//     console.log('data2', data2); //'result of job 2'
//     return 'Hello world';
// })

// .then(function(data3) {
//     console.log('data3', data3); //'Hello world'
// });

// function job1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 1');
//         }, 1000);
//     });
// }

// function job2() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 2');
//         }, 1000);
//     });
// }














// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data); // 'success'

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error); //'error'

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); //'Error caught'

//   return job(true); 
// })

// .catch(function(error) {
//   console.log(error);
// });





// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });






