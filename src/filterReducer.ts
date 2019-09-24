import { reduce } from "./reduce";
import { isOdd } from "./utility_functions";

var mapReducer = function <T, R>(f: (x: T) => R) {
    return function reducer(acc: T[], x: T): T[] {
        return (f(x) ? acc.concat([x]) : acc);
    }
};

export function filter<T>(f: (x: T) => boolean, xs: T[]) {
    return reduce(mapReducer(f), xs, []);
}

console.log(filter(isOdd, [1, 2, 3, 4]));