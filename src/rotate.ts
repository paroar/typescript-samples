import { compose } from "ramda";

var head = <T>(xs: T[]): T => xs[0];
var tail = <T>(xs: T[]): T[] => xs.slice(1);
var append = <T>(x: T) => (xs: T[]): T[] => xs.concat(x);

var rotate = <T>(xs: T[]): T[] =>
    tail(compose(append, head)(xs));

export default rotate;


function compose<X, Y, Z>(g: (y: Y) => Z, f: (x: X) => Y): (x: X) => Z {
    return function (x: X) {
        return g(f(x));
    };
}

function flatMap<X, Y, Z>(g: (y: Y) => (x: X) => Z, f: (x: X) => Y): (x: X) => Z {
    return (x: X) => g(f(x))(x);
}