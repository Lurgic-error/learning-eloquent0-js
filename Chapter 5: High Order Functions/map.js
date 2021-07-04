function mapper(arr, transformer){
    let mapped = []
    for(let elem of arr){
        mapped.push(transformer(elem))
    }
    return mapped
}
let toBeMapped = []

// Filter to be mapped first 
toBeMapped.filter(elem =>{
    // filter element you want.+
})


let mappedArr = mapper(toBeMapped, map => map.name)

console.log(`mappedArr`, mappedArr)