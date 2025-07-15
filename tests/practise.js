//print only string 
let s="123fjdk$4685kh" 
let temp=""
for(let i=0;i<s.length;i++){
    let b=s[i]
    if(b>='a' && b<='z'){
      temp+=s[i]}
}
console.log(temp)
//print unique numbers
let a=[1,3,1,9,0,10,6,4,9,1]
for(let i=0;i<a.length;i++){
    let count=0;
    for (let j=0;j<a.length;j++){
        if(a[i]===a[j]){
            count++;
        } 
    }
    if(count===1){
        console.log(a[i])
}
}
//
//bubblesort and finding the product of largest three numbers
let b=[7,-3,0,2,1,-9]
for(let i=0;i<b.length;i++){
        for(let j=i+1;j<b.length;j++){
            let temp=b[i]
        if(b[i]>b[j]){
            b[i]=b[j]
            b[j]=temp}
        }
}
console.log(b)

function product(b){
    let prod=1
    for(let i=b.length-1;i>b.length-4;i--){
        prod*=b[i]
        //console.log(prod)
    }
    console.log(prod)
}
product(b)
//input=> aaabbcdddf
//output=> a3b2cd3f
let in= "aaabbcdddf"
let res=""
for(let i=0;i<input.length;i++){ //c ounting the length and iterating through it 
    let count=1 //already count is 1 bcz of the presence of taken char
    if(!res.includes(in[i])){   // if condition to avoid the already counted char
    for (let j = i+1; j < input.length; j++) { // inner loop to count the duplicated 
        if(input[i]==input[j]){ //match condition 
            count++
        }
    } 
    res+=input[i]
     if(count>1){
         res+=count
    }  count=1}
}
console.log(res) //a3b2cd3f
let input = "aaabbcdddf";
let res = "";
let i = 0;
while (i < input.length) {
    count=1
    while(input[i]===input[i+1] && i+1<input.length){
        count++
        i++
    }
    res+=input[i]
    if(count>1){
        res+=count
    }
    i++
}
console.log(res)
var x = 23; // var =23
(function(){ //function 1
 var x = 43; //var=43
 (function random(){
 x++; 
console.log(x);
 var x = 21; })

(); 
})();
const arr = [NaN];
console.log( arr.indexOf(NaN) );
console.log( arr.includes(NaN) );
///
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users.findIndex(user => user.name == 'jo')); // 0

// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3
let arr = [ 1, 3,2,0, 15 ];

// the method reorders the content of arr
arr.sort((a,b)=>a-b);

console.log( arr );  
//
//get the OTP from string 
let s='253645 here is the otp for the transaction of amount $432.1 is '
let temp=''
let otp=''
for(let i=0;i<s.length;i++){
    if(parseInt(s[i]) <= 9  &&  parseInt(s[i])>=0){
        temp+=s[i]
    }else{
        if(temp.length>4){
            otp=temp
        }
        temp=''
    }
}
if(temp.length>4){
            otp=temp
        }
        console.log(otp)
        console.log(s.length);
let text = "Hello world!";
let result = text.repeat(2);
console.log(result)
let text = "Hellow world";
const myArr = text.split(" ");
console.log(myArr);
console.log([]==[])//false
console.log([]=='')//ture
console.log(3=='3')//true



