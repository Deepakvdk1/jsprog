let a='the whale is the largest animal'
// output should be 'lamina tsegral eht si elahw eht'
function reversestring(str){
    let arr=str.split(' ')
    let rev=''
    for (let i=arr.length-1;i>=0;i--){
        rev+=arr[i]
        rev+=' '
    }
    return (rev)
}
  let rev=reversestring(a)
console.log(rev)