let c=['ee','apple','banana','hh','ff','eeeee','gggg']
function ascending(c){
for(let i=0;i<c.length;i++){
   if((i+1)<c.length){
    if ((c[i].charAt(0)>(c[i+1]).charAt(0))){
    let temp=c[i+1]
    c[i+1]=c[i]
    c[i]=temp
   }

   }
   
} console.log(c);
} ascending(c)
function descending(c) {
    for(let i=0;i<c.length;i++){
     for(let j=i+1;j<c.length;j++){
        if((j)<c.length){
    if (c[i].charAt(0)<c[j].charAt(0)){
    let temp=c[j]
    c[j]=c[i]
    c[i]=temp
   }
     }
     }
}  console.log(c);
} descending(c)

function novowel(c){
    let i=0
   while (i<c.length) {
    let str=c[i]
    for(let j=0;j<str.length;j++){
     if(!/[aeiou]/g.test(str)){
                console.log(c[i]);
                break;
            } 
        }i++
}  
}novowel(c)

// let res=c.filter(c => {
//     if(!c.includes('a') && !c.includes('e') && !c.includes('i') && !c.includes('o') && !c.includes('u'))
//         return c;
// })
// console.log(res)


