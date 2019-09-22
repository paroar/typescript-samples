import { map } from "../map";
import { inc, double, isOdd, toUpperCase } from "../utility_functions";

describe("Map test", function () {
    it("Should increment the array values", function () {
        expect(map(inc, [1, 2, 3])).toEqual([3, 4, 5]);
    });
    it("Should double the array values", function () {
        expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("Should say if the elements of an array are odds or not", function () {
        expect(map(isOdd, [1, 2, 5])).toEqual([true, false, true]);
    });
    it("Should change the string elements to uppercase", function () {
        expect(map(toUpperCase, ["Ana", "Juan", "Antonio"])).toEqual(["ANA", "JUAN", "ANTONIO"]);
    });
})