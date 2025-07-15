//Input: "Tutorial - programming classes" output: 1. Remove duplicates 2. Display duplicates
function removeduplicate(line){
    let str=new Set()
    let duplicate=new Set()
    let unique=""
    for (let char of line){
        if(str.has(char)){
            duplicate.add(char)
        }else{
            str.add(char)
            unique+=char
        }
    }
    console.log("original string:",line);
    console.log("duplicate letters:",Array.from(duplicate).join(""));
    console.log("str without duplicates:",unique);
} 
let input="may 1 is a holiday because of mayday"
removeduplicate(input)