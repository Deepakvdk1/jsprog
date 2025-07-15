input='today the weather is cloudy' // example Output: { t: 2, e: 1, s: 1 }
res={}
for (let i=0;i<input.length;i++){
    let c=input[i] 
    let count=1
    if(c!=' ' &&/[a-zA-Z]/.test(c) ){
        if(!res[c]){
        res[c]=0
    for (let j=i+1; j < input.length; j++) {
        
        if(c==input[j]){
            count++
        }
        
    }
    //console.log(coun)
    res[c]+=count
}
}

}
console.log(res);


