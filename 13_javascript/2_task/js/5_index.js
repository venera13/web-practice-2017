var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++)
{
    var imageSrc = images[i].src;
    console.log(imageSrc);
}