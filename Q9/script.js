function callCounter(){
    let c=0;

    return function(){
        c++
        console.log(c)
    }
}
const x=callCounter()
x()
x()
x()