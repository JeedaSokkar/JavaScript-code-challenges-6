async function area(l,w){
    const module2=await import("./moduleB.js")
  

    return l*w
}
function printHelloA(){
   console.log("Hello from ModuleA") 
}
export {area,printHelloA}