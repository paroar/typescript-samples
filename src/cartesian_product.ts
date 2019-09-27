import { cartesian } from "./utility_functions";
import { unnest } from "ramda";

export var product = <T, R>(xs: T[], ys: R[]) => {
    return unnest(xs.map(cartesian(ys)));
}