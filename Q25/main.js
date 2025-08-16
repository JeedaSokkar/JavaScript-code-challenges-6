import { area,printHelloA } from "./moduleA.js";
import { print, printHello } from "./moduleB.js";


(async () => {
    console.log("Area result:", await area(3, 3)); 
    await print(); 
   

})();
  printHello();
 printHelloA();