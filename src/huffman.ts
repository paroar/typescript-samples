import { chain } from "ramda";

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

export const sortArr = (xs: (string | number)[], ys: (string | number)[]): number => {
    return (xs[1] > ys[1] ? 1 : -1);
}

export const reduce = (xs: any) => {
    let times = xs.length - 1;
    let ys = xs.slice();
    for (let i = 0; i < times; i++) {
        //@ts-ignore
        let sum = ys[0][1] + ys[1][1];
        let zs = [null, sum, ys[0], ys[1]];
        ys.push(zs);
        ys.sort(sortArr);
        ys = ys.slice(2);
    }
    ys = chain(x => x, ys);
    return ys;
}

export const isIn = <T>(y: String, xs: T[]) => {
    //@ts-ignore
    return (xs.indexOf(y) < 0 ? false : true);
}

//@ts-ignore
export const scan = <T>(xs: T[], y: char, pos: number[]): number[] => {
    if (isIn(y, xs)) {
        return pos;
    }

    if (xs.length == 2) {
        pos.pop();
        //@ts-ignore
        return;
    }
    //@ts-ignore
    return scan(xs[2], y, pos.slice().concat([2])) || scan(xs[3], y, pos.slice().concat([3]));
}

export const binary = <T,R,S>(f:T):number[]=> (xs:R[]) => (ys:S[]) => {
    return ys.map(x: R[]=>x[0].concat(f(xs,x[0],[])));
};

export const huffman = <T>(f: (x: string) => T[][]) => (x: string) => f(x);

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