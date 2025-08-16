
function increment(){
    let count =0

    return function(){
        count++
     console.log(count)
    }
}

const x=increment();
x()
x()
x()