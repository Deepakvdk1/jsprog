function str(s,c){
    let count=0
    for (char of s){
        if (char===c.toUpperCase()|| char===c.toLowerCase()){
            count++
        }
    }
    return count
}
let input='the beauty is in the eyes of the observer'
let c='b'
console.log(str(input,c));
 