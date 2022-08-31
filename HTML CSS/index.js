// let x = prompt("select x number 1 - 10")
// x = Number(x)
// if(x === 1 ){
//     let y = +prompt(" select Number ")
//     alert(Boolean(y))
// }else if (x === 2) {

//      let y = +prompt("select y num")
//      let z = +prompt("select z num")
     
//      alert(y+z)

// } else if (x === 3){
//     let  y = +prompt("select y num")
//     let z = +prompt("select z num") 
     
//      alert(y-z)
    
// }else if(x ===4){
//     let y = +prompt("select y num")
//     let z = +prompt("select z num")
     
//     alert (y>z)

// }else if(x === 5){
//     let y = +prompt("select y num")
//     let z = +prompt("select z num")
//     let a = y % z
//     if(a === 0){
//         alert(true)
//     }else{
//         alert(false)
//     }
// }else if(x === 6,7,8,9,10){ 
//     let y = prompt("select y num");

//     alert(typeof(y) )
// }else{
//     alert("error")
// }



3
 function foo(arr){
    let x
    for(i = 0;i < arr[i]; i++){
        if(x === undefined || arr[i] > x){
            x = arr[i]
            
        }

    }
    return alert(x)
}


// foo([10,5,87,41,25,3])


//7
//  function foo(text){
//      function goo(tex){
//          return alert(tex)
//      }
//      return goo(text)
//  }



// foo("Wow! It's nested function!")

// let b = {
//     name:"barev",
//     age:25
// }
// let a = {
//     city: "Vanadzor",
//     country:"Tigran Mech"
// }
// function clone (obj, obj2 ){
//     let clone ={}
//  for (key in obj){
//      clone[key]= obj[key]

//  }
//  for(key in obj2){
//      clone[key]=obj2[key]
//  }
//  return console.log(clone)
// }



// clone(a,b)

// function clone1 (obj, obj2 ){
//     let clone={}
//     Object.assign(clone,obj,obj2)
//     return console.log(clone)
// }


// clone1(a,b)

// function clone3 (obj,obj2){
// let clone3 = {...obj,...obj2}

 
// return console.log(clone3)
// }
//  clone3(a,b)


// function clone4 (obj,obj2){

//   let obj3 = JSON.parse(JSON.stringify(obj))
//   let obj4 = JSON.parse(JSON.stringify(obj2))

//   let clone = {...obj3,...obj4}

//   return clone

// }

// console.log(clone4 (b,a))


// var trainig = {
//     teacher:{
//         Hayk:{
//             age:25
//         },
//         Smbo:{
//             age:26
//         },
        
        
//     },
//     studant:{
//         Arman:{
//             number:1,
//             age:23,
//             mark:0,
//         },
//         Suro:{
//             number:2,
//             age:25,
//             mark:0,
//         },
        

//     },
    
// }

// function printAllStudentsNames(obj){
//     console.log(obj.studant)
// }

// printAllStudentsNames(trainig)










// function myhasOwnProperty(obj,proporty){
//     for(key in obj){
//         if(obj[key] === proporty){
//             return true
//         }
        
//     }
//     return false
// }


// let hhhh = {
//     name:"baf",
//     age:25,
//     father:"Bob"
// }

// console.log(myhasOwnProperty(hhhh,47))



// function myIsEmpty(obj){
//     for(key in obj){
//         return false
//     }
//     return true
// }


// let object ={}


// console.log(myIsEmpty(hhhh))