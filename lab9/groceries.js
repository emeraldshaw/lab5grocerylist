var items = document.createElement('div');
items.innerHTML = "<ul> <li>bread</li><li>honey</li><li>lemons</li><li>bananas</li><li>spinach</li> </ul>";

document.body.appendChild(items);


var prices = document.createElement('div');
prices.innerHTML = "<ul> <li>2.49</li><li>5.53</li><li>1.75</li><li>0.33</li><li>2.07</li> </ul>";

document.body.appendChild(prices);

var total = document.createElement('div');
var total = 0;
  prices.forEach(
    function(money){
    total = total + money;
}
);

document.body.appendChild(total);
