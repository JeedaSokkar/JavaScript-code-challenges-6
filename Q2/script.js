
function outerFunction(){
   let Num=5

    return function(newNum){
        Num=newNum
        console.log(newNum)
    }
}
const update= outerFunction()
update(44)