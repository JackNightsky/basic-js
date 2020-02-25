module.exports = function repeater(str, options ) {
      ({repeatTimes=1, 
        separator='+', 
        addition='', 
        additionRepeatTimes=1, 
        additionSeparator=''} = options);
      
      let add = new Array(additionRepeatTimes).fill(addition+'').join(additionSeparator);
  
      return new Array(repeatTimes).fill(str+add).join(separator);
};
  