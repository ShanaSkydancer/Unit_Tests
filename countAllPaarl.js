module.exports = function(regiNumbers){
  var paarlRegiNumbers = [];
  var splitRegiNumbers = regiNumbers.split(',');

  // console.log(splitRegiNumbers);

    for (var i=0;i<splitRegiNumbers.length;i++){
    	var cjRegiNumber = splitRegiNumbers[i].trim();

  // console.log(cjRegiNumber.startsWith('CJ'));

     	if (cjRegiNumber.startsWith('CJ')){
        	paarlRegiNumbers.push(cjRegiNumber);
        }
    }
  return paarlRegiNumbers.length;
}
