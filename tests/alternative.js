function alternative(a){
    let chararr=a.split("")
    result=''
    for(let i=0;i<chararr.length;i++){
        if(i%2===0){
        result+=chararr[i].toUpperCase()
        }else{
            result+=chararr[i]
        }
    } return result
}
console.log(alternative('andrei tarkovsky'))