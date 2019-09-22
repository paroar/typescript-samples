import { reduce } from "../reduce";
import { sumArray, longest, lengthier } from "../utility_functions";

describe("Reduce test", function () {
    it("Returns the sum of the array", function () {
        expect(reduce(sumArray, [1, 2, 3, 4, 5], 0)).toBe(15);
        expect(reduce(sumArray, [1, 2, 3, 4], 0)).toBe(10);
    });
    it("Returns the length of the longest string", function () {
        expect(reduce(longest, ["Ana", "Pepe", "Antonio", "Juan", "Jose Ramón", "Marcos"], [])).toBe(10);
    });
    it("Returns the lengthier string", function () {
        expect(reduce(lengthier, ["Ana", "Pepe", "Antonio", "Juan", "Jose Ramón", "Marcos"], "")).toBe("Jose Ramón");
        expect(reduce(lengthier, ["Pepe", "Antonio", "Juan", "Ana", "Marcos"], "Ana")).toBe("Antonio");
    });
});