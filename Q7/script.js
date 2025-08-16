function authenticate(pass){

    return function(password){
        if(pass === password){
            return "The password is Correct"
        }
        return "The password is False"
    }
}
const check=authenticate("12345")
console.log(check("12345"))