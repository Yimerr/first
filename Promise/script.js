let p = new Promise((resolve, reject) => {
    let a = 1 + 2 ;
    if(a==2){
        resolve("success")
    }
    else{
        reject("error")
    }
})
p.then((message)=>{
   // console.log('This is in the then ' + message)
}).catch((message)=>{
    //console.log('this is in the catch ' + message)
})



//console.log("program started")

const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        resolve("success");

    }, 3000)
})
//console.log(myPromise)
//console.log("program in progress")

myPromise.then((message)=>{
   // console.log("program completed " + message)
})


//Question number 3
//console.log("program started")
const prom = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if(a==3){
        setTimeout(()=>{
            resolve();
        },3000)
    }else{    setTimeout(()=>{
        reject()
    }, 4000)

    }
    

})

prom.then(()=>{
   // console.log("success")
}).catch(()=>{
    //console.log('error')
})

//Question number 4
//console.log("program started")
const twoPromises = new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve();
    }, 3000)
})
 
 twoPromises.then(()=>{
    //console.log("Step 1 completed")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Step 2 completed")
        }, 3000)
    })
 }).then((val)=>{
    //console.log(val)
})




//Question Number 5

//console.log("Program started")

const myNewProm = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve({data: "Hello, friend", error:null})
    } ,5000)
    
})

//console.log(myNewProm)
//console.log("Program in prograss")
myNewProm.then(value=>{
    //console.log(value);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("First promise chain complete")
        }, 2000)
    }).then((message)=>{
       // console.log(message);
    })

})
myNewProm.then((value)=>{
   // console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("Second promise chain completed")
        }, 10000)
    })
}).then((val)=>{
    //console.log(val)
})


//Bonus

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(10)

    }, 3000)
})

const secondPromise = new Promise((resolve, reject) => {
   setTimeout(()=>{
   resolve(20)
   }, 5000) 
})

Promise.all([firstPromise, secondPromise]).then((values)=>{
    const firstValue = values[0];
    const secondValue = values[1];
    console.log(firstValue + secondValue);
})























