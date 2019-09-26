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
export var minus = (x: number, y: number) => x - y;
export var specialChars = (xs: string) => xs.replace(/[^a-zA-Z áéíóú]/g, "");
export var duplicate = (xs: string) => xs + xs;
export var union = (xs: string) => (ys: string) => ys + xs;
export var initial = (xs: string) => xs.charAt(0);
export var repeat = (y: boolean) => (xs: string) => y ? xs + xs : xs;
export var upper = (y: boolean) => (xs: string) => y ? xs.toUpperCase() : xs;

export var product = <T, R>(xs: T[], ys: R[]) => {
    var zs = [];
    for (let x of xs) {
        for (let y of ys) {
            zs.push([x, y]);
        }
    }
    return zs;
}