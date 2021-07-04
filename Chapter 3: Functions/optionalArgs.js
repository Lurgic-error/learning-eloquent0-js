function minus(a, b){
    if(b == undefined) return -a
    return a - b
}

console.log(minus(101))

console.log(`minus(12, 34)`, minus(12, 34))


function power(base, exponen=2){
    let result = 1 
    for(let i=0; i < exponen; i++){
        result *= base
    }
    return result
}

console.log(`power(3)`, power(3))


console.log(`power(25, 5)`, power(25, 5))