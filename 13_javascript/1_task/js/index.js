var products = document.body.children[0].children[0].children;
var productsList = document.getElementById('productsList').children;

for (var i = 0; i < products.length; i++)
{
    console.log(products[i].textContent);
}

for (var j = 0; j < productsList.length; j++)
{
    console.log(productsList[j].textContent);
}