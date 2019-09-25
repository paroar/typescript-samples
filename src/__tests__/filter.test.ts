import { filter } from "../filter";
import { isOdd, lengthierThan } from "../utility_functions";

describe("Filter tests", function () {
    it("Returns odd values of the array", function () {
        expect(filter(isOdd, [1, 2, 3, 5])).toEqual([1, 3, 5]);
        expect(filter(isOdd, [6, 2, 4, 2])).toEqual([]);
        expect(filter(isOdd, [])).toEqual([]);
    })
    it("Returns strings with more than 3 chars", function () {
        expect(filter(lengthierThan, ["Ana", "Juan", "Pepe"])).toEqual(["Juan", "Pepe"]);
        expect(filter(lengthierThan, [])).toEqual([]);
    })
})