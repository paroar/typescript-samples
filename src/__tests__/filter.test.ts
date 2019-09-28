import { filter } from "../filter";
import { isOdd, lengthierThan } from "../utility_functions";

describe("Returns odd values of the array ", function () {
    it("[1, 2, 3, 5] => [1, 3, 5]", function () {
        expect(filter(isOdd, [1, 2, 3, 5])).toEqual([1, 3, 5]);
    });
    it("[6, 2, 4, 2] => []", function () {
        expect(filter(isOdd, [6, 2, 4, 2])).toEqual([]);
    });
    it("[] => []", function () {
        expect(filter(isOdd, [])).toEqual([]);
    });
});
describe("Returns strings with more than n chars", function () {
    it('["Ana", "Juan", "Pepe"] => ["Juan", "Pepe"]', function () {
        expect(filter(lengthierThan(3), ["Ana", "Juan", "Pepe"])).toEqual(["Juan", "Pepe"]);
    });
    it('[] => []', function () {
        expect(filter(lengthierThan(3), [])).toEqual([]);
    });
});