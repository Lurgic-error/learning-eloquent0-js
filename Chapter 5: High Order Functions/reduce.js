function reduce(arr, combine, start){
    let current = start
    for(let element of arr){
        current = combine(current, element)
    }
    return current
}


let reduced = reduce([1,2,3,4,5,6,7,8,9, 10], (a, b)=> a + b, 0)

console.log(`reduced`, reduced)