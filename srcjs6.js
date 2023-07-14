console.log("This is external js");
let name="Kai";
console.log(name+" is the most talented beyblader.");
// let name1="Tyson";
// console.log(name1+" is a talented beyblader.");
function greet(name){
    console.log(name + " is a talented beyblader");
}
greet('Tyson');
greet('Ray');
greet('Max');
function fact(num){
    let fact1=1;
    if(num-1==0) return 1;
    else{
        fact1=num*fact(num-1);
        return fact1;
        console.log("This line will never execute as it is after return");
    }
}
console.log(fact(1));
console.log(fact(5));
