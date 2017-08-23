var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++)
{
    var elem = images[i].src;
    console.log(elem);
}