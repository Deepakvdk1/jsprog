let s='Today the weather is cloudy'
let r=s.split(' ')
res=[]
for(let i=0;i<r.length;i++){
    let text=r[i]
    let newtext=''
for(let i=0;i<text.length;i++){
       if(i==0){
         newtext+=text[i].toUpperCase()  
       }else{
    newtext+=text[i]
       }
     }
       res.push(newtext)
   }
   console.log(...res)
   //console.log(res.join())