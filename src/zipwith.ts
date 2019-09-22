export function zipwith<T, V>(f: (x: T, y: T) => V, xs: T[], ys: T[]) {
    let zs = [];
    let longer = Math.min(xs.length, ys.length);
    for (let i = 0; i < longer; i++) {
        zs.push(f(xs[i], ys[i]));
    }
    return zs;
}