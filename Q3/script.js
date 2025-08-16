
function createAdder(num1){
   

    return function(num2){
        return num1+num2
    }
}

let add=createAdder(8)
console.log(add(3))