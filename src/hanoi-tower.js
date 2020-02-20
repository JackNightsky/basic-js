module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return {turns: 2**disksNumber-1, seconds: (2**disksNumber-1) / (turnsSpeed/3600) };
    // throw 'Not implemented';
    // remove line with error and write your code here
}