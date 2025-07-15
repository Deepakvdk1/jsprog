let s='I love IndiA' //output = A_idnI_evolI
let b=[]
let result=''
for(let i=0;i<s.length;i++){
    if((s[i].toLowerCase())>='a' &&(s[i].toLowerCase())<='z'){
        b.push(s[i]) // extract all char
    }
}
b.reverse()// reverse 
console.log(b);
let index=0
for (let i = 0; i < s.length; i++) {
    if((s[i].toLowerCase())>='a' && (s[i].toLowerCase())<='z'){
        result+=b[index++] //add charters to new string 
    }else{
        result+=s[i] // add spaces to new string with respect to old string index
        
    }
}
console.log(result)


// for(let i=)

// console.log(result)