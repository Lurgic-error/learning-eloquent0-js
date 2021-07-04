/**
 * 
 * Minimum
 * 
 * 
    The previous chapter introduced the standard function Math.min that returns
    its smallest argument. We can build something like that now. Write a function
    min that takes two arguments and returns their minimum.
 */


function min(a, b) {
    if (a > b) {
        return b
    } else if (b > a) {
        return a
    } else if (!a) {
        return b
    } else if (!b) {
        return a
    }
}

console.log(`min(123,43)`, min(123, 43))