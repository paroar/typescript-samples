import { cartesian } from "./utility_functions";
import { unnest, map } from "ramda";

export var product = <T, R, S>(f: (x: T, y: R) => S, xs: T[] = [], ys: R[] = []): S[] => {
    return unnest(map(cartesian(f, ys))(xs));
}


export default function flatmap<T, R>(f: (x: T) => R[], xs: T[]): R[] {
    return xs.length == 0 ? [] : [...f(xs[0]), ...flatmap(f, xs.slice(1))];
  }