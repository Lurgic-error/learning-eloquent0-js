/**
 * Looping a triangle
    Write a loop that makes seven calls to console.log to output the following
    triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######

    It may be useful to know that you can find the length of a string by writing
    .length after it.
 */

let word = '#'

for (let i = 0; word.length <= 7; i++){
    console.log(`${i} ==> ${word}`)
    word = word + '#'
}

console.log('\n',word)