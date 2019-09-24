import { reduce } from "./reduce";
import { inc, double } from "./utility_functions";

var mapReducer = function <T, R>(f: (x: T) => R) {
    return function reducer(acc: R[], x: T): R[] {
        return acc.concat(f(x));
    }
};

export function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
    //@ts-ignore
    return reduce(mapReducer(f), xs, []);
}

console.log(map(inc, [1, 2, 3, 4]));
console.log(map(double, [1, 2, 3, 4]));