let a=[1,3,1,9,0,10,6,4,9,1]
let b=[]
for (let i = 0; i < a.length; i++) {
    let count=0
    for (let j = 0; j < a.length; j++) {
        if(a[i]===a[j]){
            count++
        }   
    }  if(count===1){
            b.push(a[i])
        }
    
}
console.log(b);
