export function map<T, R>(f: (x: T) => R, xs: T[]) {
    if (xs.length === 0) {
        return [];
    }
    return [f(xs[0])].concat(map(f, xs.slice(1)));
    /*
    let ys = [];
    for(let x of xs){
      ys.push(f(x));
    }
    return ys;
    */
}