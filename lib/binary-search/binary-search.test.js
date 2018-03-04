const should = require('should');
const algo = require('../index.js');


describe('Binary search', () => {
    it('should return searched number', () => {
        const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 8, 9], 4);

        should(elementIndex).be.eql(3);
    });

    it('should return -1 (no elem in sequince)', () => {
        const elementIndex = algo.binarySearch([4], 4);

        should(elementIndex).be.eql(1);
    });
});
