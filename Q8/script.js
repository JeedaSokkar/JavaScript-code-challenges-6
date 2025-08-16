function createPerson(name,age){

    return{
        setName(n){
            name=n
        },
        getName(){
            return name
        },
        setAge(a){
            age=a
        },
        getAge(){
            return age
        }
    }
}

const person =createPerson("Ali",23)
person.setAge(22)
person.setName("Jeeda")
console.log(person.getName())
console.log(person.getAge())
