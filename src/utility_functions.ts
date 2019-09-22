var inc = (x: number) => x + 2;
var double = (x: number) => x * 2;
var isOdd = (x: number) => x % 2 != 0;
var toUpperCase = (x: string) => x.toUpperCase();
var lengthierThan = (x: string) => x.length > 3;
var sumArray = (x: number, y: number) => x + y;
var longest = (x: number, y: string) => x > y.length ? x : y.length;
var lengthier = (x: string, y: string) => x.length > y.length ? x : y;
var add = (x: any, y: any) => x + y;
var max = (x: any, y: any) => x > y ? x : y;
var pair = (x: any, y: any) => [x, y];

export { inc, double, isOdd, toUpperCase, lengthierThan, sumArray, longest, lengthier, add, max, pair }