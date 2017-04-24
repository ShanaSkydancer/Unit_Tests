module.exports = function(regiNumber){
  if (regiNumber.startsWith('CY')){
	return 'Bellville';
 }
  else if (regiNumber.startsWith('CJ')){
	return 'Paarl';
  }
  else if (regiNumber.startsWith('CA')){
	return 'Cape Town';
  }
  else
    return 'Some other place!';
}
