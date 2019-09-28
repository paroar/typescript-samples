import { lengthierThan, union, initial, specialChars, repeat, upper } from "./utility_functions";
import { compose, map, filter, split, join } from "ramda";

export var acronymize = (phrase: string, separator = "", capitalize = true, pluralize = false): string => {
    var transform = compose(
        union(separator),
        repeat(pluralize),
        upper(capitalize),
        initial
    );
    var xs = compose(
        join(''),
        map(transform),
        filter(lengthierThan(3)),
        split(" "),
        specialChars
    )(phrase);

    return xs;
}