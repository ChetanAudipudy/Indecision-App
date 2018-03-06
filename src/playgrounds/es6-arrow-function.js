const multiplier = {
    numbers : [1 ,6],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}
console.log(multiplier.multiply())
