console.log("This is module");

function avg(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

//to export the function
// module.exports=avg;

module.exports={
    fn:avg,
    name:"Meenakshi",
    repo:"GitHub"
}