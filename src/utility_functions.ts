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
export var pair = (x: number, y: number) => [x, y];
export var smallerArray = (xs: any, ys: any) => xs.length < ys.length ? xs : ys;