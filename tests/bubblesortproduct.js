let arr=[656,256,125,5,8,9698,23]
function bublesort(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if (a[j]>a[j+1]) {
                let temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
            }
        }

    }
    prod(a)
}
function prod(x){
    let p=1
    for (let i = x.length-1; i > x.length-4; i--) {
        p*=x[i]    
    }
console.log(p)// product of last 3 numbers 
}
bublesort(arr)