import { mapChar, mapToArray, splitChar, sortArr, reduce, binary } from "../huffman";

let x = "Hola";
describe("splitChar test", function () {
    it("Should return array of chars from string", function () {
        expect(splitChar(x)).toEqual(["H", "o", "l", "a"]);
    });
});

describe("mapChar test", function () {
    it("Should return object with chars from string and number of repetitions", function () {
        expect(mapChar(splitChar(x))).toEqual({ "H": 1, "o": 1, "l": 1, "a": 1 });
    });
});

describe("mapToArray test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect(mapToArray(mapChar(splitChar(x)))).toEqual([["H", 1], ["o", 1], ["l", 1], ["a", 1]]);
    });
});
/*
let arr = mapToArray(mapChar(splitChar(x)));
describe("huffman test", function () {
    it("Should return sorted array", function () {
        //@ts-ignore
        expect(arr.sort(sortArr)).toEqual([["S", 1], ["o", 1], ["l", 1]]);
    });
});
*/
/*
//@ts-ignore
let arr = mapToArray(mapChar(splitChar("BBBanana"))).sort(sortArr);
describe("reduce test", function () {
    it("Should return reduced array", function () {
        expect(reduce(arr)).toEqual("");
    });
});
*/
//@ts-ignore
let arr = reduce(mapToArray(mapChar(splitChar("sol"))).sort(sortArr));
describe("binary test", function () {
    it("Should return binary translation", function () {
        expect(binary(arr)).toEqual("");
    });
});

//TESTS FOR THE USELESS P*OOP
/*
let listA={"head": {"data": ["H", 1], "left": null, "right": {"data": ["l", 1], "left": null, "right": {"data": ["a", 1], "left": null, "right": {"data": ["o", 2], "left": null, "right": null}}}}};
let listB={"head": {"data": ["o", 0], "left": null, "right": {"data": ["H", 1], "left": null, "right": {"data": ["l", 1], "left": null, "right": {"data": ["a", 3], "left": null, "right": null}}}}};
describe("LinkedList test", function () {
    it("Should return linkedList of array", function () {
        expect(arrayToList([["o", 2], ["a", 1], ["l", 1], ["H", 1]])).toEqual(listA);
    });
    it("Should return linkedList of array", function () {
        expect(arrayToList([["a", 3], ["l", 1], ["H", 1], ["o", 0]])).toEqual(listB);
    });
});

let list1 = arrayToList([["o", 2]]);
let node = new Node(["T", 1]);
describe("LinkedList test", function () {
    it("Should insert at end", function () {
        expect(list1.insertAtEnd(node)).toEqual({"head": {"data": ["o", 2], "left": null, "right": {"data": {"data": ["T", 1], "left": null, "right": null}, "left": null, "right": null}}});
    });
});
describe("delete test", function () {
    it("Should delete head of linkedList", function () {
        expect(list1.deleteBeginning()).toEqual({"head": {"data": {"data": ["T", 1], "left": null, "right": null}, "left": null, "right": null}});
    });
});

let list2 = arrayToList([["o", 2],["a", 3],["b",7]].sort(sortArr));
let node2 = new Node(["A", 6]);
describe("binaryInsert test", function () {
    it("Should insert binary node at end of linkedList", function () {
        expect(list2.binaryInsert(node, node2)).toEqual("");
    });
});

describe("reduce test", function () {
    it("Should reduce linkedList", function () {
        expect(list2.reduce()).toEqual("");
    });
});
*/