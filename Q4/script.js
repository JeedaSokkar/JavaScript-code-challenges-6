function delayedGreeting(message){

    return function(time){
        setTimeout(()=>{
console.log(message)
        },time)
    }
}
const x=delayedGreeting("Hello world")
x(3000)