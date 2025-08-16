function buttonClickHandler(){

let c=0
   
return function(){
    c++
    console.log(c)
}
    
}
let x=buttonClickHandler()
document.getElementById("btn").onclick=x