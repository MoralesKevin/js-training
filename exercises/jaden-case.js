'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (str){
    let newArr = str.split(" ");
    for(let i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1);
    }
    return newArr.join(" ");
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase,'function');
assert.strictEqual(jadenCase("ca va et toi"),"Ca Va Et Toi")
// End of tests */
