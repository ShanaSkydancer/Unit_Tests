var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

module.exports = function(inputList){
	var outputMap = {};
  	var mostSales = 0;
  	var mostDep = '';

  	for(var i = 0; i < inputList.length; i++){
      	var current = inputList[i]
      	var currentDep = current.department;
      	var currentSales = current.sales;

      	if(outputMap[currentDep] === undefined){
          	outputMap[currentDep] = 0;
        }

        outputMap[currentDep] += currentSales;

      for(current in outputMap){
      		var currentDep = current;
        	var currentSales = outputMap[currentDep];

        	if(mostSales < currentSales){
               	mostSales = currentSales;
              	mostDep = currentDep;
            }
      }
    }
  	return mostDep;
}
