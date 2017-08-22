var elements = document.getElementsByTagName('img');

for (var i = 0; i < elements.length; i++)
{
    var elem = elements[i].src;
    console.log(elem);
}