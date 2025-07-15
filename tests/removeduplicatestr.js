function remvdupword(line){
let words=line.split(' ')
let res=[]
duplicate=[]
for(let i=0;i<words.length;i++){
    if(!res.includes(words[i])){
        res.push(words[i])
    }else{
        duplicate.push(words[i])
    console.log('duplictae word : '+duplicate.join(''));
    
    }
} return res.join(' ')
}
console.log(remvdupword('the persepective of beauty will vary person to person'))