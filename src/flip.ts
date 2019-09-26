export function flip<X, Y, Z>(f: (x: X, y: Y) => Z): (y: Y, x: X) => Z {
    return function (x, y) {
        return f(y, x);
    }
}