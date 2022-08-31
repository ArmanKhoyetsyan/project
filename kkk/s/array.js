// let a = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// let b = a.reverse()

// // for (let i = 0; i < a.length / 2; i++) {
// //   let m = a[a.length - 1 - i];
// //   a[a.length - 1 - i] = a[i];
// //   a[i]= m
// // }
// alert(a)
// alert(b)

// function foo(arr, count) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += count) {
//     newArr.push(arr.slice(i,count+i));
//   }
//   return newArr
// }

// console.log(foo([1,2,3,4,5,6,3],2))

//  function goo(arr,count){
//     let newArr=[]
//     const co = Math.ceil(arr.length/count);
//     for(let i= 0;i< co;i++){
//         console.log(co);
//         newArr.push(arr.splice(0,count))
//     }
//     return newArr
//  }

//  console.log(goo([1,2,3,4,5,6,3],2))

// function intersection(...arrays){
//     const result = arrays[0].filter((element) => {
//       const indexOfElement = arrays[1].indexOf(element);
//       if (indexOfElement >= 0) {
//         return element;
//       }
//     });
//     if (arrays.length > 2) {
//       intersection(result, ...arrays.slice(2, arrays.length));
//     }
//     return Array.from(new Set(result));
//   };

//   console.log(intersection([1,92],[2,6],[2,92,8],[92,7]))

// function goooo(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let a = arr1.map((el, i) => el === arr2[i]);

//   return !a.includes(false);
// }

// alert(goooo([12,3,4,5,6],[12,3,4,5,6]))
//////////////////////////////////////////////////////////////////////////////////
//
//const isEmpty = (object) => {
//
//  const objectKeys = Object.keys(object);
//  if (objectKeys.length === 0) {
//    return true;
//  }
//
//  return !objectKeys.filter((key) => object[key] || object[key] === false).length;
//}
//alert(isEmpty({"a":undefined,"age":0}))

// function fo(obj1, obj2) {
//     debugger
//   const obj1key = Object.keys(obj1);
//   const obj2key = Object.keys(obj2);
//   if (obj1key.length !== obj2key.length) {
//     return false;
//   }
//   return !obj1key.filter((key) => obj1[key] !== obj2[key]).length;
// }

// const isEmptyDeep = (element) => {
//   if (element === null) {
//     return true;
//   }
//   if (Array.isArray(element)) {
//     if (element.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < element.length; i += 1) {
//       if (
//         typeof element[i] === "boolean" ||
//         (typeof element[i] === "number" && !Number.isNaN(element[i])) ||
//         (typeof element[i] === "string" && element[i] !== "")
//       ) {
//         result = false;
//         break;
//       }
//       if (
//         Array.isArray(element[i]) ||
//         (typeof element[i] === "object" && element[i] !== null)
//       ) {
//         result = isEmptyDeep(element[i]);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
//   if (typeof element === "object") {
//     const objectKeys = Object.keys(element);
//     if (objectKeys.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < objectKeys.length; i += 1) {
//       const value = element[objectKeys[i]];

//       if (
//         typeof value === "boolean" ||
//         (typeof value === "number" && !Number.isNaN(value)) ||
//         (typeof value === "string" && value !== "")
//       ) {
//         result = false;
//         break;
//       }
//       if (
//         Array.isArray(value) ||
//         (typeof value === "object" && value !== null)
//       ) {
//         result = isEmptyDeep(value);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
// };

// function foo(element) {
//     if (element === null) {
//         return true;
//     }
//     if (Array.isArray(element)) {
//         if (element.length === 0) {
//             return true;
//         }
//         for (let i = 0; i < element.length; i += 1) {
//             if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
//                 || (typeof element[i] === 'string' && element[i] !== '')) {
//                 return false;

//             }
//             if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
//                 return isEmptyDeep(element[i]);

//             }

//         }
//     }
//     if (typeof element === "object") {
//         let objKey = Object.keys(element);
//         if (objKey.length === 0) {
//             return true;
//         }
//         for (let i = 0; i < objKey.length; i++) {
//             let value = element[objKey[i]];
//             if (
//                 (typeof value === "string" && value !== "") ||
//                 (typeof value === "number" && !Number.isNaN(value)) ||
//                 typeof value === "boolean" ||
//                 typeof value === "function"
//             ) {
//                 return false;
//             }

//             if (Array.isArray(value) || typeof value === "object") {
//                 return foo(value);
//             }
//             return true;
//         }
//     }
// }

// const intersectionDeep = (firstObj, secondObj) => {
//     debugger
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }
//     if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
//       if (JSON.stringify(firstObj[key]) === JSON.stringify(secondObj[key])) {
//         acc = {
//           ...acc,
//           [key]: firstObj[key],
//         };
//       }
//     } else if (
//       typeof firstObj[key] === "object" &&
//       typeof secondObj[key] === "object"
//     ) {
//       const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

//       if (Object.keys(hasIntersection).length !== 0) {
//         acc = {
//           ...acc,
//           [key]: hasIntersection,
//         };
//       }
//     }
//     return acc;
//   }, {});
// };

// async function foo() {
//   await setTimeout(() => console.log("Barev"), 3000)
// console.log(11111111111111);
// }

// foo()
//  console.log(11111)


// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

// const test = async () => {
//   const array = [
//     async () => {
//       await delay(2000)
//       return 1000
//     },
//     async () => {
//       await delay(2000)
//       return 2000
//     },
//     async () => {
//       await delay(7000)

//       console.log(11111)
//       return 3000
//     },
//     async () => {
//       await delay(2000)
//       return 4000
//     },
//     async () => {
//       await delay(2000)
//       return 5000
//     },
//     async () => {
//       await delay(1000)
//       return 6000
//     },

//   ];

//   const result1 = await sumOfPositiveResults(array, 8);
//   console.log("Result 1:", result1);
// console.log("Check Result 1:", result1 === 7000);
//};


// async function sumOfPositiveResults(arrayOfAsyncFuncs) {
//   let arr = 0
//   for (let i = 0; i < arrayOfAsyncFuncs.length; i++) {
//     try {
//       const val = await arrayOfAsyncFuncs[i]()
//       if (val > 0) {
//         arr = arr + val
//       }
//     } catch (error) {
//     }
//   }
//   return arr

// }


//////////////////// hertov
// Promise.prototype.allSettledArman = function (arrPromise) {
//   return new Promise(async (resolve, reject) => {
//     let arr = [];
//     for (let promise of arrPromise) {
//       try {
//         let res = await promise()
//         arr.push({ status: "fulfilled", value: res });
//       } catch (error) {
//         arr.push({ status: "rejected", reason: `${error} `});
//       }
//     };
//     resolve(arr)
//   });
// }



// async function sumOfPositiveResults(arrayOfAsyncFuncs) {
//   return Promise.prototype.allSettledArman(arrayOfAsyncFuncs)
//     .then(arr => arr)
// }


/////////////////////////////////////// miangamich
// Promise.prototype.allSettledArman = function (arrPromise) {
//   return new Promise((resolve, reject)=>{
//     let arr = [];
//     for(let promise of arrPromise){
//       promise
//         .then((value) => {
//           arr.push({ status: "fulfilled", value: value });
//           if (arrPromise.length === arr.length) resolve(arr);
//         })
//         .catch((err) => {
//           arr.push({ status: "rejected", reason: err });
//           if (arrPromise.length === arr.length) resolve(arr);
//         });
//     };
//   });
// }



// async function sumOfPositiveResults(arrayOfAsyncFuncs) {
//   return Promise.prototype.allSettledArman(arrayOfAsyncFuncs.map(func => func()))
//     .then(arr => arr)
// }

// async function sumOfPositiveResults(arrayOfAsyncFuncs) {
//   let arr = 0
//   for (let promise of arrayOfAsyncFuncs) {
//     try {
//       const val = await promise()
//       if (val > 0) {
//         arr = arr + val
//       }
//     } catch (error) {
//     }
//   }
//   return arr

// }


///////////////////////// limit

// function sumOfPositiveResults(arrFunc, limit) {
//   return new Promise(async (resolve, reject) => {
//     let arrFunc2 = JSON.parse(JSON.stringify(arrFunc)) 
//     let arrResolve = [];
//     function foo(arr, lim) {
//       if (lim > arr.length) {
//         lim = arr.length
//       }
//       for (let i = 0; i < lim; i++) {
//         arr[i]()
//           .then((value) => {
//             arrResolve.push({ status: "fulfilled", value: value });
//           })
//           .catch((err) => {
//             arrResolve.push({ status: "rejected", reason: err })
//           })
//           .finally(() => {
//             if (arrResolve.length === arrFunc.length) {
//               resolve(arrResolve)
//             }
//             else if (arrFunc2.length === arrFunc.length) {
//               arrFunc2.splice(0, limit - 1)
//             } else {
//               arrFunc2.shift()
//               foo(arrFunc2, 1)
//             }
//           })
//       };
//     }
//     foo(arrFunc, limit)

//   });
// }


// test().catch((error) => console.error(error));



/////////////////// quickSort

// let numberArr = [11, 3, 5, 665, 52, 4, 35, 1, 12, 151, 32, 578, 51, 99]

// function myQuickSort(arr) {
//   if (arr.length < 2) {
//     return arr
//   }
//   let pivot = arr[Math.floor(Math.random() * arr.length)]
//   let small = arr.filter(val => val < pivot)
//   let big = arr.filter(val => val > pivot)

//   return [...myQuickSort(small),pivot,...myQuickSort(big)]
// }
// console.log(myQuickSort(numberArr))

// let i = 0
// function recursing(num) {
//   if (num === 0) return num
//   if (i > 9000) {
//     setTimeout(() => {
//       i = 0
//       recursing(num) + ',' + num
//     }, 0)
//     return num 
//   } else {
//     i++
//     return recursing(num - 1) + ',' + num
//   }
// }
// console.log(recursing(50000))


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function foo() {
  let x = 0

  async function recursing(num) {
    x++
    return new Promise(async (res, rej) => {
      if (num < 1) {
        return res(0);
      }
      if (x >= 1500) {
        x = 0
        await sleep(1);
      }
      const result = num + (await recursing(num - 1));
      res(result);
      console.log(num);
    });
  }

  recursing(100000);
}
foo()




// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function recursing(num) {
//   return new Promise(async (res, rej) => {
//     if (num < 1) {
//       return res(0);
//     }
//     await sleep(1);
//     const result = num + (await recursing(num - 1));
//     res(result);
//     console.log(num);
//   });
// }
// recursing(10000);