export var inc = (x: number) => x + 2;
export var double = (x: number) => x * 2;
export var isOdd = (x: number) => x % 2 != 0;
export var toUpperCase = (x: string) => x.toUpperCase();
export var lengthierThan = (x: string) => x.length > 3;
export var sumArray = (x: number, y: number) => x + y;
export var longest = (x: number, y: string) => x > y.length ? x : y.length;
export var lengthier = (x: string, y: string) => x.length > y.length ? x : y;
export var add = (x: number, y: number) => x + y;
export var max = (x: number, y: number) => x > y ? x : y;
export var pair = <T, R>(x: T, y: R): [T, R] => [x, y];
export var not = <T>(f: any, x: T) => !f(x);

var notIncludeDot = (x: string) => !x.includes(".");
var notIncludeComma = (x: string) => !x.includes(",");
var specialChars = (xs: string[]) => xs.filter(lengthierThan).filter(notIncludeComma).filter(notIncludeDot);

export var acronymize = (phrase: string, separator = "", capitalize = true, pluralize = false) => {
    var xs = specialChars(phrase.split(" ")).map(x => x.charAt(0));
    if (pluralize) xs = xs.map(x => x += x);
    if (capitalize) xs = xs.map(x => x.toUpperCase());
    xs = xs.map(x => x + separator);
    return xs.join('');
}

export var product = <T, R>(xs: T[], ys: R[]) => {
    var zs = [];
    for(let x of xs){
        for(let y of ys){
            zs.push([x,y]);
        }
    }
    return zs;
}