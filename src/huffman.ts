import { chain, compose, sort } from "ramda";

export const splitChar = (xs: string): string[] => xs.split("");

export const mapChar = (xs: string[]): object => {
    let o = {};
    for (let x of xs) {
        //@ts-ignore
        o[x] = (o[x] || 0) + 1;
    };
    return o;
}

export const mapToArray = <T>(os: object): T[][] => Object.entries(os);
//@ts-ignore
export const sortArr = <T, R>(xs: T[], ys: R[]): number => (xs[1] > ys[1] ? 1 : -1);

export const reduce = <T>(xs: T): T => {
    //@ts-ignore
    let times = xs.length - 1;
    //@ts-ignore
    let ys = xs.slice();
    for (let i = 0; i < times; i++) {
        let sum = ys[0][1] + ys[1][1];
        let zs = [null, sum, ys[0], ys[1]];
        ys.push(zs);
        ys.sort(sortArr);
        ys = ys.slice(2);
    }
    ys = chain(x => x, ys);
    return ys;
}

//@ts-ignore
export const isIn = <T, R>(y: R) => (xs: T[]) => (xs.indexOf(y) < 0 ? false : true);

export const scan = <T, R>(xs: T[], y: R, pos: number[]): string => {
    if (isIn(y)(xs)) {
        return String(pos).replace(/,/g, "");
    }
    if (xs.length == 2) {
        return "";
    }
    //@ts-ignore
    return scan(xs[2], y, pos.concat([0])) || scan(xs[3], y, pos.concat([1]));
}

//@ts-ignore
export const binary = <T, R, S>(f: (xs: T, ys: R, []) => S, ys: R[]) => (xs: T) => ys.map(x => [x[0], f(xs, x[0], [])]);

export const huffman = (x: string) => {
    let sorted = compose(
        //@ts-ignore
        sort(sortArr),
        mapToArray,
        mapChar,
        splitChar)
        (x);

    return compose(
        //@ts-ignore
        binary(scan, sorted),
        reduce,
        //@ts-ignore
        sort(sortArr),
        mapToArray,
        mapChar,
        splitChar)
        (x)
}

export const conversion = (xs: any, ys: string) => {
    let translate = "";
    let zs = ys.slice(0);
    let tmp = "";
    while (zs.length > 0) {
        tmp += zs.slice(0, 1);
        zs = zs.slice(1);
        //@ts-ignore
        var cmp = xs.filter(y => y[1] == tmp);
        if (typeof cmp[0] != "undefined") {
            translate += cmp[0][0];
            tmp = "";
        }
    }
    return translate;
}


//USELESS P*OOP
/*
export class Node {
    data: any;
    right: Node | null;
    left: Node | null;
    constructor(data: any, right = null, left = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

export class LinkedList {
    head: Node | null;
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data: any) {
        let newNode = new Node(data);
        newNode.right = this.head;
        this.head = newNode;
        return this.head;
    }

    insertAtEnd(data: any) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        let p = this.head;
        while (p.right != null) {
            p = p.right;
        }
        p.right = newNode;
        return this;
    }

    deleteBeginning() {
        if (this.head == null) {
            return this;
        }
        this.head = this.head.right;
        return this;
    }

    binaryInsert(dataR: Node, dataL: Node) {
        let newData = dataR.data[1] + dataL.data[1];
        let nodeR = new Node(dataR.data);
        let nodeL = new Node(dataL.data);
        this.insertAtEnd(newData);
        return this;
    }

    times() {
        let i = 0;
        let p = this.head;
        while (p != null) {
            i++;
            p = p.right;
        }
        return --i;
    }

    reduce() {
        if (this.head == null) {
            return this;
        }
        let p = this.head;
        if (p.right == null) {
            return this;
        }
        let q = p.right;
        let times = this.times();
        for (let i = 0; i < times; i++) {
            this.binaryInsert(p, q);
            this.deleteBeginning();
            this.deleteBeginning();
            p = this.head;
            //@ts-ignore
            q = p.right;
        }
        return this;
    }

}

export const arrayToList = (xs: (string | number)[][]): LinkedList => {
    let list = new LinkedList();
    for (let x of xs) {
        list.insertAtBeginning(x);
    }
    return list;
}
*/