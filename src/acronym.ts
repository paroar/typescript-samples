import { lengthierThan, union, initial, specialChars, repeat, upper } from "./utility_functions";
import { compose, map, filter, split, join } from "ramda";

export var acronymize = (phrase: string, separator = "", capitalize = true, pluralize = false): string => {
    var xs = compose(
        filter(lengthierThan),
        split(" "),
        specialChars
    )(phrase);
    var ys = compose(
        join(''),
        map(union(separator)),
        map(repeat(pluralize)),
        map(upper(capitalize)),
        map(initial)
    )(xs);
    return ys;
}