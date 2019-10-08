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

class Node {
    constructor(data: any, next = null) {
        //@ts-ignore
        this.data = data;
        //@ts-ignore
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        //@ts-ignore
        this.head = null;

    }
    //@ts-ignore
    insertAtBeginning(data) {
        let newNode = new Node(data);
        //@ts-ignore
        newNode.next = this.head;
        //@ts-ignore
        this.head = newNode;
        //@ts-ignore
        return this.head;
    }

    binaryInsertAtEnd(datax, datay){
        let newNode = new Node(data);
        //TODO
    }
}

export const arrayToList = (xs: (string | number)[][]): object => {
    let list = new LinkedList();
    for (let x of xs) {
        list.insertAtBeginning(x);
    }
    return list;
}
