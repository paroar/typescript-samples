/*export function reduce<T, R>(f: (x: T, y: T | R) => T, xs: R[], acum?: any) {
    if (xs.length === 0) {
        return (typeof acum === 'undefined' ? 0 : acum);
    }
    return f(reduce(f, xs.slice(1), acum), xs[0]);

    let current = (typeof acum === 'undefined') ? 0 : acum;
    for(let x of xs){
        current = f(current, x);
    }
    return current;

}*/

export function reduce<T, R>(f: (acc: R, x: T) => R, xs: T[], init?: R) {
    var result;
    if (init == undefined && arguments.length == 2) {
        if (xs.length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        result = xs[0];
    } else {
        result = init;
    }
    for (var i = 0; i < xs.length; i++) {
        result = f(result as any, xs[i]);
    }
    return result;
}