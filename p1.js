a=10
if(a%2==0) console.log("even")
else console.log("Odd")

//looping 
for (let b = 1; b < 5; b++) {
    process.stdout.write(b + "")
}
let c=1
while(c<3) {
    console.log(c)
    c++
}
//funtion
function add( d, e){
    return d+e
}
console.log(add(2,5))

function greeting(f){
    return "Good Morning, "+f
}
console.log(greeting("Praveen"))
// let sub=(a,b)=>{console.log(a-b);}  use instead of function
// pop push reverse sort concatination 
// map filter reduce
ab=[1,2,3,4]
xy=ab.map(a=>a*2)
console.log(xy)

let person={
    name:"Tamil",
    age:25,
    city:"Chennai",
    greet: function(){
        console.log("Hello,I'm"+ this.name);
    }
};
console.log(person.greet)
let student={
    id:101,
    name:"Ram",
    marks:[85,90,92]
};
console.log(student.name)

//HOF
function greet(a){return a}
function sen(a,b){console.log(a+b)}
sen(greet("Hello! "),"Ram")

let abc=new Set([1,2,2,4,4,6,6,9,56])

//add , delete ,has, clear , size
abc.add(99)
console.log(abc);

let bd =new Map()
bd.set(1,2,2,4,4,6,6,9,56)
console.log(bd)
 // destructing
let xyyy=["grape","choclate","lemon"]
let [af,bs,ag]=xyyy
console.log(af,bs)