import { reduce } from "./reduce";
import { inc } from "./utility_functions";

var mapReducer = function <T, R>(f: (x: T) => R) {
    return function (xs) {
        return f(xs);
    }
};

export function map<T, R>(f: (x: T) => R, xs: T[]) {
    return reduce(mapReducer(f), xs);
}

console.log(map(inc, [1, 2, 3, 4]));