var products = document.body.children[0].children[0].children;
var productsList = $('#productsList');

for (var i = 0; i < products.length; i++)
{
    console.log(products[i].textContent);
}

$.each(productsList, function(index,element)
{
    console.log(element.textContent);
});
