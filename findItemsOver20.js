module.exports = function(items){
  var itemList = [];

  for (var i=0;i<items.length; i++){
    	var item = items[i];
   		if (item.qty > 20){
        itemList.push(item);
    }
}
  return itemList;
}
