module.exports = function(day){
  var weekDay = true;
  if (day.startsWith('M', 'T', 'W', 'T', 'F') && day.endsWith('day')){
    	weekDay = true;
  }
	else {
     	weekDay = false;
 }
  return weekDay
}
