module.exports = function transform(arr) {
    
    if (!Array.isArray(arr)) throw 'Error if arr is not an Array';
    if (!arr.includes('--discard-next') &&
        !arr.includes('--discard-prev') &&
        !arr.includes('--double-next') &&
        !arr.includes('--double-prev') ) return arr;

    let copyArr = [...arr];

    while (copyArr.includes('--double-prev')) {
        let i = copyArr.indexOf('--double-prev');
        i > 0 ? copyArr[i] = copyArr[i-1] : copyArr = copyArr.slice(i+1) ;
    }
    
    while (copyArr.includes('--double-next')) {
        let i = copyArr.indexOf('--double-next');
        copyArr.length > i+1 ? copyArr[i] = copyArr[i+1] : copyArr = copyArr.slice(0,-1) ;
    }

    while (copyArr.includes('--discard-next')) {
        let i = copyArr.indexOf('--discard-next');
        (copyArr.length > i+1) ? copyArr.splice(i,2) : (copyArr.length === 1) ? copyArr = [] : copyArr = copyArr.slice(0,-1);
    }

    while (copyArr.includes('--discard-prev')) {
        let i = copyArr.indexOf('--discard-prev');
        (i !== 0) ? copyArr.splice(i-1,2) : (copyArr.length > 1) ? copyArr = copyArr.slice(1) : copyArr = [] ;
    }    

    return copyArr;

    
    // throw 'Not implemented';
    // remove line with error and write your code here
};
