class Circle{
    constructor(r){
        this.r=r
        this.PI=Math.PI
    }
     area(){
        return this.r*this.r*this.PI
     }
}

class Square {
    constructor(l){
        this.l=l
    }
     area(){
        return this.l*this.l
     }
}
export {Circle,Square}