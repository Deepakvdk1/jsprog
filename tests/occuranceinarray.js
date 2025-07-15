//take a string and give the occurrence of 'a' in that string

let arr=['apple','banana','mengo','lichee','avacado']
let letter='e'
let result=[]
async function chkwrd(ar,l){
    for( let word of ar){
        if(word.includes(l)){
         result.push(word)
        }
    }
}
chkwrd(arr,letter).then(()=>{
console.log(result)
})
