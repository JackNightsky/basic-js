const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'  ) return false;

  sampleActivity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'number' || Number.isNaN(sampleActivity) ) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY/ Number(sampleActivity))/k);
  
  return t> 0 && t < 50000 ? t : false;
};
