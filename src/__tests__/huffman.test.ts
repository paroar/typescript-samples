import { mapChar, mapToArray, splitChar, huffman, sortArr, arrayToList } from "../huffman";
import compose from "ramda";

describe("splitChar test", function () {
    it("Should return array of chars from string", function () {
        expect(splitChar("Hola")).toEqual(["H", "o", "l", "a"]);
    });
});

describe("mapChar test", function () {
    it("Should return object with chars from string and number of repetitions", function () {
        expect(mapChar(["H", "o", "l", "a"])).toEqual({ "H": 1, "o": 1, "l": 1, "a": 1 });
    });
});

describe("mapToArray test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect(mapToArray({ "H": 1, "o": 1, "l": 1, "a": 1 })).toEqual([["H", 1], ["o", 1], ["l", 1], ["a", 1]]);
    });
});

/*describe("huffman test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect(
            huffman(compose(
                mapToArray,
                mapChar,
                splitChar
            ))("HOLA")
        ).toEqual("");
    });
});*/

describe("huffman test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect([["H", 1], ["o", 2], ["l", 1], ["a", 1]].sort(sortArr)).toEqual([["o", 2], ["a", 1], ["l", 1], ["H", 1]]);
    });
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect([["H", 1], ["o", 0], ["l", 1], ["a", 3]].sort(sortArr)).toEqual([["a", 3], ["l", 1], ["H", 1], ["o", 0]]);
    });
});

describe("LinkedList test", function () {
    it("Should return linkedList of array", function () {
        expect(arrayToList([["o", 2], ["a", 1], ["l", 1], ["H", 1]])).toEqual("");
    });
    it("Should return linkedList of array", function () {
        expect(arrayToList([["a", 3], ["l", 1], ["H", 1], ["o", 0]])).toEqual("");
    });
});