const fs=require("fs");
//Reading from file
let text=fs.readFileSync("nodejs2.txt","utf-8");
console.log("The content of file is");
console.log(text);
//Changing content of file
text=text.replace("Adipisci","hfnvjhhjh");
console.log("The content of file is");
console.log(text);
//Writing in a file which if not exist then would be created
fs.writeFileSync("kai.txt",text);