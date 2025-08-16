// ES6 import

import { sum,add } from "./module1.js";

// CommonJS import

const {sum2,add2}=require("./module2.js")

console.log(`ES6 : `,sum(2,3))
console.log(`ES6 : `, add(2,34))

console.log("CommonJS : ",sum2(2,3))
console.log( "CommonJS : ",add2(4,6))