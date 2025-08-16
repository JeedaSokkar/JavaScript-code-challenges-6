
function addToList(){
    let values=[]
    return function(message){
        values.push(message)
        let ul=document.getElementById("list")

        let li=document.createElement("li")
         li.append(message)
         ul.appendChild(li)
    }
}
const x=addToList()
x("hello")
x("Hi")