let input=[{b: 'Bob'},{a: 'Malice'}, {c: 'Charlie'}]
// Output: Sorted alphabetically by name
// let result=input.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(result)
let result=input.sort((a,b)=>{
    let [[ val1,]]=Object.entries(a)
    let [[ val2,]]=Object.entries(b)
    return val1.localeCompare(val2)
})
console.log(result ) //[ { a: 'Malice' }, { b: 'Bob' }, { c: 'Charlie' } ]