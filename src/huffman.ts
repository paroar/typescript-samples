export const splitChar = (xs: string): string[] => xs.split("");
export const mapChar = (xs: string[]): object => {
    let o = {};
    for (let x of xs) {
        //@ts-ignore
        o[x] = (o[x] || 0) + 1;
    };
    return o;
}
export const mapToArray = <T>(os: object):T[][] => {
    //@ts-ignore
    return Object.keys(os).map(x => [x, os[x]]);
}

export const huffman = <T>(f:(x: string) => T[][]) => (x: string) => f(x);