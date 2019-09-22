export function reduce<T, R>(f: (x: T, y: T | R) => T, xs: R[], acum?: any) {
    if (xs.length === 0) {
        return (typeof acum === 'undefined' ? 0 : acum);
    }
    return f(reduce(f, xs.slice(1), acum), xs[0]);
    /*
    let current = (typeof acum === 'undefined') ? 0 : acum;
    for(let x of xs){
        current = f(current, x);
    }
    return current;
    */
}