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

export const huffman = <T>(f: (x: string) => T[][]) => (x: string) => f(x);

export const sortArr = (xs: (string | number)[], ys: (string | number)[]): number => {
    return (xs[1] > ys[1] ? 1 : -1);
}

export const reduce = (xs: any) => {
    let times = xs.length - 1;
    for (let i = 0; i < times; i++) {
        //@ts-ignore
        let ys = [null, xs[0][1] + xs[1][1], xs[0], xs[1]];
        xs.push(ys);
        xs.sort(sortArr);
        xs = xs.slice(2);
    }
    return xs;
}

export const binary = (xs: any) => {
    return xs;
}

export const simplify = (xs: any)=>{
    while(typeof(xs[0]) != "object" || xs[0] == null){
        xs = xs.slice(1);
    }
    return xs;
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