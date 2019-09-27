import { product } from "../cartesian_product";

describe("Should return the cartesian product", function () {
    it("[1],[1]=>[[1,1]]", function () {
        expect(product([1], [1])).toEqual([[1, 1]]);
    });
    it("[1, 2],[1]=>[[1,1],[2,1]]", function () {
        expect(product([1, 2], [1])).toEqual([[1, 1], [2, 1]]);
    });
    it("[1, 2],['a']=>[[1,'a'],[2,'a']]", function () {
        expect(product([1, 2], ['a'])).toEqual([[1, 'a'], [2, 'a']]);
    });
    it("[1, 2],['a','b']=>[[1,'a'],[1,'b'],[2,'a'],[2,'b']]", function () {
        expect(product([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);
    });
})