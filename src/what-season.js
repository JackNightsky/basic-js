module.exports = function getSeason(date ) {
  if (date == undefined) return 'Unable to determine the time of year!';

  let seasons = ['winter','winter',
                'spring','spring','spring',
                'summer','summer','summer',
                'autumn','autumn','autumn',
                'winter',];
                
  if (date instanceof Date && date.valueOf()) {
    let mountsNum = date.getMonth();
    return seasons[mountsNum];
  }
  else throw new Error(); 

};
