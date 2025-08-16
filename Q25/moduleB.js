async function print(){
    let length=10;
    let width=3;
  
    const module=await import ("./moduleA.js")

    console.log(await module.area(length,width))
}
function printHello(){
   console.log("Hello from ModuleB")
} 
export {print,printHello}