import {mapChar, mapToArray, splitChar, huffman} from "../huffman";
import compose from "ramda";

describe("Huffman test", function () {
    it("Should return mapChar of string array", function () {
        expect(
            huffman(
                compose(mapToArray,mapChar,splitChar)
            )("banana")
        ).toEqual("");
    });
})