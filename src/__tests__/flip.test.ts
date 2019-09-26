import { flip } from "../flip";
import { minus } from "../utility_functions";

describe("Flip test", function () {
    it("Should flip arguments", function () {
        expect(flip(minus)(3,4)).toEqual(1);
    });
    it("Should flip arguments", function () {
        expect(flip(minus)(4,3)).toEqual(-1);
    });
})