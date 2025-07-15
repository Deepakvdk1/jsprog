Input= ['apple', 'ant', 'ball', 'bat','cantilever','cat','chrome']    // Output: { a: ['apple', 'ant'], b: ['ball', 'bat'] }
 
function grpbyfirst(a){
   let  result={}
    for(item of a){
        let c=item.charAt(0).toLowerCase()
        if(!result[c]){
            result[c]=[]
        }
        result[c].push(item)
    } return result
}
console.log(grpbyfirst(Input))