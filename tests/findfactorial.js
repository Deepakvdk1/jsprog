function findfactorial(number){
    if(number<=0){return "invalid request"}
      else{  let f=1
          for(let i=1;i<=number;i++){
              f*=i;
               } return f; 
        }
    }
    let num=3
    let output=findfactorial(num);
    console.log(output)
    