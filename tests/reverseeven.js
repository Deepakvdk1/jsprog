function reverseeven(str){
    let a=str.trim().split(' ')
    let res=[]
    for(let i=0;i<a.length;i++){
        if((i+1)%2===0){
            rev=''
            for(let j=a[i].length-1;j>=0;j--){
                    rev+=a[i][j]
            }
            res.push(rev)
          }else{
          res.push(a[i])}
    }
   return res.join(' ')

}
console.log(reverseeven(' the perspective of beauty will vary person to person '));
