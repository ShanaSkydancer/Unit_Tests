module.exports = function(registrationNumber, location){
  var regNum = registrationNumber.endsWith(location);
  return regNum
}
