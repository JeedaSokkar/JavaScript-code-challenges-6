
let button=document.getElementById("btn")

button.onclick=async function(){
     const helper= await import('./helper.js');

  const message = helper.greet('Jeeda');
 console.log(message);
}