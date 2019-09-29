import { cartesian } from "./utility_functions";
import { unnest, map } from "ramda";

export var product = <T, R>(xs: T[] = [], ys: R[] = []) => {
    return unnest(map(cartesian(ys))(xs));
}