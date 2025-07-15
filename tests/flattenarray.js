Input= [1, [2, [3, 4], 5], 6]       //after flattening the array Output: [1, 2, 3, 4, 5, 6]

console.log(Input.flat(2)); // using flat method 

//using recurrsion 
function nestarr(arr){
    let res=[]
for(item of arr){
    if(Array.isArray(item)){
        res.push(...nestarr(item))
    } else {
        res.push(item)
    }
}
return res
}
console.log(nestarr(Input));


//using reduce method
function flatarr(a){
    return a.reduce((acc,curr)=> Array.isArray(curr)? acc.concat(flatarr(curr)): acc.concat(curr) ,[]);
}


console.log(flatarr(Input)); // [1, 2, 3, 4, 5, 6]
//using stack length 
function flatar(a){
    let stack=[...a]
    let result=[]
    while(stack.length){
        let b=stack.pop()
        if(Array.isArray(b)){
            stack.push(...b)
        }else{
            result.push(b)
        }
    }return result.reverse()
}
console.log(flatar(Input))
