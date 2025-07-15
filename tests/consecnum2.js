let l='12345456745634'
let seq="";
let con=[]
for(let i=0;i<l.length;i++){
    let a=parseInt(l[i])
    let b=parseInt(l[i+1])
    if((b-a)===1){
    seq+=l[i]
    }else{
        seq+=l[i]
        if(seq.length>1){
            con.push(seq)
        }
        seq=''
    }
}
console.log(con);

