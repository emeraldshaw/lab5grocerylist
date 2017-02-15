var item1 = {
  name: "bread",
  price: 2.49
}
var item2 = {
  name: "honey",
  price: 5.53
}
var item3 = {
  name: "lemons",
  price: 1.75
}
var item4 = {
  name: "bananas",
  price: 0.33
}
var item5 = {
  name: "spinach",
  price: 2.07
}

var groceryList = [item1, item2, item3, item4, item5];

for(var i=0; i<groceryList.length; i++){
  console.log(groceryList[i].name + "   " + groceryList[i].price);
}

for(var total=0; i<groceryList.length; i++){

//still struggling a bit with summing the totals. I think I'm overthinking it still.
