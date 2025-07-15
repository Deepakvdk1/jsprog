//remove vowels
function removevowels(line){
    const vowels=['a','e','i','o','u']
    let result=""
    for(let i=0;i<line.length;i++){
        let char=line[i]
        if(!vowels.includes(char.toLowerCase())){
            result+=char;
        }
    } 
    return result
}
let input="hi i am deepak"
let output=removevowels(input)
console.log(output)
