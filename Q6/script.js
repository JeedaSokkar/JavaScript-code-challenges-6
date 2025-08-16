
function FibonacciSeries(){
    const res={}
return function Fibonacci(n){
    if(n<=1) return n
    if(res[n] !== undefined)return res[n]
     res[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
        return res[n];
}
}
const test=FibonacciSeries()
console.log(test(10))