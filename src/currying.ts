var divisible = function(x: number){
    return function (y: number){
        return x + y;
    }
}
var divisible10 = divisible(10);
/*console.log(divisible10(5));
console.log(5%10);
*/


var isOdd = (x: number) => x % 2 != 0;
var not = function<T>(f:any, x:T){
    return !f(x);
}

console.log(not(isOdd,2));