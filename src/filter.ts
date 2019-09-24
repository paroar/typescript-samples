export function filter<T>(f: (x: T) => boolean, xs: T[]) {
    let ys = [];
    for(let x of xs){
        if(f(x)){
            ys.push(x);
        }
    }
    return ys;
}
/*
if (xs.length === 0) {
    return [];
}
if (f(xs[0])) {
    return [xs[0]].concat(filter(f, xs.slice(1)));
}
return filter(f, xs.slice(1));
*/