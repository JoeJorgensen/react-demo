

// return array of alphabet strings
export const getAlphabet = ()=>{
    let alp = []
    for(let i =97; i<=122; i++){
        alp.push(String.fromCharCode(i))
    }
return alp
}
let x = getAlphabet()

console.log(x)
// String.fromCharCode(32) space 
// String.fromCharCode(97) 'A'
// String.fromCharCode(98) 'B'
// String.fromCharCode(122) 'Z'