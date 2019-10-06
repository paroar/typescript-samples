import { mapChar, mapToArray, splitChar, huffman } from "../huffman";
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

describe("huffman test", function () {
    it("Should return array of arrays with chars and number of repetitions", function () {
        expect(
            huffman(compose(
                mapToArray,
                mapChar,
                splitChar
            ))("HOLA")
        ).toEqual("");
    });
});