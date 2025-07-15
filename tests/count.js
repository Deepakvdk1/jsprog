// Input: "geeksforgeeks"
// Output: {g:2, e:4,k:2,s:2,f:1,o:1,r:1}
function countletters(x){
    let result={}
    for (let i=0;i<x.length;i++){
        char=x[i]
        if(result[char]){
            result[char]++
        }else{
            result[char]=1
        }
    } return result 
}
console.log(countletters("geeksforgeeks"))
// function countLetters(str) { //from ChatGPT
//     let countMap = {};

//     for (let char of str) {
//         if (countMap[char]) {
//             countMap[char]++;
//         } else {
//             countMap[char] = 1;
//         }
//     }

//     console.log(countMap);
// }

// let input = "I am a robot";
// countLetters(input);