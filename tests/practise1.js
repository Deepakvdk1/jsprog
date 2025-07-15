// 1. print 1-100 without using loop
function count(num){
    if(num>100) return;
    console.log(num)
    count(num+1)
}
count(1)

//2.Input:'Employee123SH78R24' Print only the alphabets
let a='Employee123SH78R24' 
let temp=''
for(let i=0;i<a.length;i++){
    if (/[a-zA-z]/.test(a[i])){
        temp+=a[i]
    }
    
}console.log(temp)

// 3.Input: //  Using filter() get the output of age greater than 35.
let empDetails=[
{id:"1",name:"user22",age:"26",work:"programmer"},
{id:"2",name:"user23",age:"28",work:"programmer"},
{id:"3",name:"user24",age:"40",work:"Manager"},
{id:"4",name:"user25",age:"35",work:"Lead"},
{id:"5",name:"user26",age:"38",work:"tester"},
{id:"6",name:"user27",age:"50",work:"programmer"}
]    

let result =empDetails.filter(emp=>Number(emp.age)>35)
console.log(result)

//4.asynchronous function to synchronous 
async function fd(){
    { console.log("block 1")
    }
    {
        await setTimeout(()=>{},4000)
        console.log("block 2")
    }
    {
        console.log("block 3")
    }
}
fd()

//5.find the minimum & maximum value 
let b=[10,9,3,5,12,6,7,56]
function mxmn(x){
    let min=x[0]
    let max=x[0]
    let minindex=0
    let maxindex=0
    for (let i=1;i<x.length;i++){
      if(x[i]>max){
          max=x[i]
          maxindex=i
      }
      if(x[i]<min){
          min=x[i]
          minindex=i
      }
    } console.log(`minimum value${min} min index${minindex} max value${max} maxindex${maxindex} `)
}
mxmn(b)

//6.bubble sort 
let bb=[10,9,3,5,12,6,7,56]
let tem=0
for(let j=0;j<bb.length;j++){
for(let i=0;i<bb.length-1;i++){

    
    if(bb[i]>bb[i+1]){
       tem= bb[i]
       bb[i]=bb[i+1]
       bb[i+1]=tem
    }
}
}
console.log(bb)

//7.extract the otp
let str= 'The OTP for the transaction of Rs. 143.32 is 456732.'
let arrstr= str.split(' ')
let t='' 
for(let i=0;i<arrstr.length;i++){
    let word=arrstr[i].replace(/\D/,'')
        if(word.length===6 ){
         console.log(`the OTP is :${word}`)
         break    }
    
}

//8.program on palindrome

function palindrome(x){
    let original=x
    if(typeof x==='number'){
        let reversed=0
        while(x>0){
            let reminder=x%10
            reversed=reversed*10+reminder
            x=Math.floor(x/10)
        }
        return(original===reversed)
    }
    if (typeof x=== "string") {
        let reversed=''
        for(let i=x.length-1;i>=0;i--){
            reversed+=x[i]
        }return (original===reversed)
    } return false
}
let x=1231
if(palindrome(x)){
    console.log(`${x} is palindrome `)
}
else
{
    console.log(`${x} is not palindrome `)
}