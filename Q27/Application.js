import {url,timeOut,retryCount} from "./configuration.js"

console.log("API URL:", url);
console.log("Timeout:", timeOut, "ms");
console.log("Retry attempts:", retryCount);

async function openurl(url) {
    try{
      for(let i=0;i<retryCount;i++){
      const response=  await fetch(url)
      const data=await response.json()
      console.log(data)
    }
       
    }catch(error){
        console.log(error.message)
    }
    finally{
        (console.log("Done"))
    }
}
setTimeout(()=>{
    openurl(url)
},timeOut)
