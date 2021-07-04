function wrapper(item){
    return () => console.log(`item`, item)
}


let item = wrapper("item one")

item()

let item2 = wrapper("item 2")

item2()


function multiplier(factor){
    return (number) =>  number * factor
}

let thrice = multiplier(3)
let fifth = multiplier(5)

console.log(`thrice(90)`, thrice(90))

console.log(`fifth(20)`, fifth(20))
