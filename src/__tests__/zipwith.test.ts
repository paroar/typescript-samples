import { zipwith } from "../zipwith";
import { add, max, pair } from "../utility_functions";

describe("zipwith test", function(){
    it("Add elements of both arrays by position", function(){
        expect(zipwith(add, [1,2,4], [5,6])).toEqual([6,8]);
        expect(zipwith(add, [5,6], [1,2,4])).toEqual([6,8]);
        expect(zipwith(add, [], [1,2,4])).toEqual([]);
        expect(zipwith(add, [5,6,10], [1,2,4])).toEqual([6,8,14]);
    });
    it("Max elements of both arrays by position", function(){
        expect(zipwith(max, [1,2,4], [5,6])).toEqual([5,6]);
        expect(zipwith(max, [5,6], [1,2,4])).toEqual([5,6]);
        expect(zipwith(max, [], [1,2,4])).toEqual([]);
        expect(zipwith(max, [5,6,10], [1,2,4])).toEqual([5,6,10]);
    });
    it("Pair elements of both arrays by position", function(){
        expect(zipwith(pair, [1,2,4], [5,6])).toEqual([[1,5],[2,6]]);
        expect(zipwith(pair, [5,6], [1,2,4])).toEqual([[5,1],[6,2]]);
        expect(zipwith(pair, [], [1,2,4])).toEqual([]);
        expect(zipwith(pair, [5,6,10], [1,2,4])).toEqual([[5,1],[6,2],[10,4]]);
    });
})