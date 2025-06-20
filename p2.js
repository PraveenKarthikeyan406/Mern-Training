
//spreading
let arr1=[3,4,5,6,]
let arr2=[...arr1,4,7,3]
console.log(arr2)
// "use strict";
 

//closure
function ou(){
    let nam="Tarz"
    function inn(){
        console.log("Hello"+nam)
    } return inn;
}
ou()

/* Asynchoronous programming
 callback
 peomise tell
 Asyn , Await
 settimeout*/
 
 //settimeout
 console.log("first")
 setTimeout(()=>{console.log("second")},100) // 100 in seconds delay
 console.log("third")

 let vb=1

 const timer=setInterval(()=>{
    console.log(vb)
    vb++
    if(vb>5){
        clearInterval(timer)
    }
 },1000)
