module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        if (Array.isArray(arr)) {
            return (arr.length == 0) ? 1 : 1 + Math.max(...(arr.map(el => this.calculateDepth(el))));
        } else return 0;

        // throw 'Not implemented';
        // remove line with error and write your code here
    }
};