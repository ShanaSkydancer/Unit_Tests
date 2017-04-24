module.exports = function(bill){
  var total = 0;
  var costs = bill.split(', ');

 for (var i=0;i<costs.length;i++){

   switch(costs[i]){
   	case 'call':
       	total += 2.75
   		break;
    case 'sms':
		total += 0.65
   		break;
    default:
       	total += 0.00
   }
}
return 'R' + total.toFixed(2);
}
