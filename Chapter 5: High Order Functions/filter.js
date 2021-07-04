function filter(arr, tester){
    let filtered = []
    for(let element of arr){
        if(tester(element)){ // tester is a function that tests if the element is need in the filtered array.
            filtered.push(element)
        }
    }
    return filtered
}
let arrToFilter = [] 
let toBeFiltered = filter(arrToFilter, element => {
    // test element to be filtered
})

console.log(`toBeFiltered`, toBeFiltered)