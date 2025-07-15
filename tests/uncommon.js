let a=[10,20,30,40,50]
let b=[20,30,45,65,50,75]
let result=[]
 for(let i=0;i<a.length;i++){
     let found=false
    for(let j=0;j<b.length;j++){      
    if(a[i]==b[j]){
        found=true
        break
    }
 }if(!found){
        result.push(a[i])
    }
 }
 for(let i=0;i<b.length;i++){
     let found=false
    for(let j=0;j<a.length;j++){
    if(b[i]==a[j]){
        found=true
        break
    }
 }if(!found){
        result.push(b[i])
    }
 }
 console.log(result)