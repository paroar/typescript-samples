import { smallerArray } from "./utility_functions";

export function zipwith<T, V>(f: (x: T, y: T) => V, xs: T[], ys: T[]) {
    let zs = [];
    let longer = smallerArray(xs, ys).length;
    for (let i = 0; i < longer; i++) {
        zs.push(f(xs[i], ys[i]));
    }
    return zs;
}