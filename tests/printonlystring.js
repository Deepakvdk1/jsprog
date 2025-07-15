let s="123fjdk$4685kh" 
let temp=''
for(let i=0;i<s.length;i++){
if((s[i])>='a' && (s[i])<='z' ){
temp+=s[i]
}
}
console.log(temp)