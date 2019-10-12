import { mapChar, mapToArray, splitChar, sortArr, reduce, huffman, conversion } from "../huffman";
import { compose, sort } from "ramda";

describe("splitChar test", function () {
    it("Should return array of chars from string", function () {
        expect(splitChar("laptop")).toEqual(["l", "a", "p", "t", "o", "p"]);
    });
});

describe("mapChar test", function () {
    it("Should return object with chars from string and number of repetitions", function () {
        expect(
            compose(
                mapChar,
                splitChar)
                ("laptop")
        ).toEqual({ "a": 1, "l": 1, "o": 1, "p": 2, "t": 1 });
    });
});

describe("mapToArray test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect(
            compose(
                mapToArray,
                mapChar,
                splitChar)
                ("laptop")
        ).toEqual([["l", 1], ["a", 1], ["p", 2], ["t", 1], ["o", 1]]);
    });
});


describe("sort test", function () {
    it("Should return sorted array", function () {
        expect(
            compose(
                //@ts-ignore
                sort(sortArr),
                mapToArray,
                mapChar,
                splitChar)
                ("laptop")
        ).toEqual([["l", 1], ["a", 1], ["p", 2], ["t", 1], ["o", 1]]);
    });
});


describe("reduce test", function () {
    it("Should return reduced array", function () {
        expect(
            compose(
                reduce,
                //@ts-ignore
                sort(sortArr),
                mapToArray,
                mapChar,
                splitChar)
                ("laptop")
        ).toEqual([null, 6, [null, 3, ["p", 2], ["t", 1]], [null, 3, ["o", 1], [null, 2, ["l", 1], ["a", 1]]]]);
    });
});

describe("huffman test", function () {
    it("Should return binary tree", function () {
        expect(huffman("laptop")).toEqual([["l", "110"], ["a", "111"], ["p", "00"], ["t", "01"], ["o", "10"]]);
    });
});

describe("conversion test", function () {
    it("Should return converted text", function () {
        expect(conversion(
            [["l", "110"], ["a", "111"], ["p", "00"], ["t", "01"], ["o", "10"]],
            "110111000110000"
        )).toEqual("laptop");
    });
});