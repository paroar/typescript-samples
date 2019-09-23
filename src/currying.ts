var divisible = function(x: number){
    return function (y: number){
        return x + y;
    }
}
var divisible10 = divisible(10);


console.log(divisible10(5));
console.log(5%10);