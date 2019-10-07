export const splitChar = (xs: string): string[] => xs.split("");
export const mapChar = (xs: string[]): object => {
    let o = {};
    for (let x of xs) {
        //@ts-ignore
        o[x] = (o[x] || 0) + 1;
    };
    return o;
}
export const mapToArray = <T>(os: object): T[][] => {
    return Object.entries(os);
}

export const huffman = <T>(f: (x: string) => T[][]) => (x: string) => f(x);

export const sortArr = (xs: (string | number)[], ys: (string | number)[]): number => {
    return (xs[1] > ys[1] ? -1 : 1);
}

export const linkedList = (xs:any) => {
    let o = {
        next: undefined
    };
    if(xs.length == 0){
        return o;
    }else{
        o[xs[0][0]] = xs[0][1];

    }
}

/*
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertLast(data){
        this.head = new NodeJS()
    }
}*/