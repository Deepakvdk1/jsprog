function palindrome(input){
    let original=input
    let reversed=0
    let r=""
    if(typeof input==='number'){
        //if (input<0) return false;
        while(input>0){
            let digit=input%10
            reversed=reversed*10+digit
            input=Math.floor(input/10)
        }
        return reversed===original
    }
    if(typeof input==="string"){
        let str=input.toString()
    for (let i=str.length-1;i>=0;i--){
        r+=str[i]}
    return str===r 
    }
}
if(palindrome(121)){
    console.log(`it is a palindrome`)
}else{console.log(`it is not a palindrome`)}
