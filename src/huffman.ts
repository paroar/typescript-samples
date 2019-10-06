export const splitChar = (xs: string): string[] => xs.split("");
export const mapChar = (xs: string[]) => {
    let o = {};
    for (let x of xs) {
        //@ts-ignore
        o[x] = (o[x] || 0) + 1;
    };
    return o;
}
export const mapToArray = (os: object) => {
    //@ts-ignore
    return Object.keys(os).map(x => [x, os[x]]);
}

export const huffman = <T>(f:(x: string) => T[][]) => (x: string) => f(x);