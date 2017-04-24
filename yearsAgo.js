module.exports = function(year){
    var thisYear = new Date();
 	var otherYear = thisYear.getFullYear();
  return otherYear - year;
}
