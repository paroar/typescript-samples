export function reduce<T, R, V>(f: (x: T, y: R) => V, xs: any[], acum?: any):any {
    if (xs.length === 0) {
        return acum;
    }
    return f(reduce(f, xs.slice(1), acum), xs[0]);
    /*
    let current = acum;
    for(let x of xs){
        current = f(current, x);
    }
    return current;
    */
}