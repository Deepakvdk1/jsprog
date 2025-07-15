let a=[1,2,3]
let b=[2,3,4,5] //[3,5,7,5]
res=[]
let i=0
//console.log(typeof(a[3]));

while (b.length>i){
    
    if(a[i]!==undefined){
        res.push(a[i]+b[i])
    }else{
       res.push( b[i])
    }
    i++
    }
console.log(res);
