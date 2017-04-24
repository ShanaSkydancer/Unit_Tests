module.exports = function(items, threshold){
 var itemList = [];
     for (var i=0;i<items.length; i++){
  		var item = items[i];
       if (item.qty > threshold) {
        itemList.push(item);
       }
     }
  return itemList;
}
