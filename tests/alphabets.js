//Write a program to separate alphabets from the URL
function alphabet(line) {
    let letters=""
for(let char of line){
    if(/[a-zA-Z]/.test(char)){
letters+=char
    }
}
    console.log("original url:",line)
    console.log("only alphabets:",letters)
}
let url="https://www.youtube.com/watch?v=yOuElUSfAs8&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-"
alphabet(url);