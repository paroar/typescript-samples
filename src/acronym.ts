import { lengthierThan, union, initial, specialChars, plural, cap } from "./utility_functions";
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
        map(plural(pluralize)),
        map(cap(capitalize)),
        map(initial),
    )(xs);
    return ys;
}