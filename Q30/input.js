function getData(){
    const form=document.getElementById("form")
form.addEventListener("submit",function(e){
e.preventDefault()
console.log("Name:", form.name.value);
console.log("Email:", form.email.value);
})

}
export{
    getData
}