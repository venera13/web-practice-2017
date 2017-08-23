var texts = document.getElementsByTagName('p');
var tegNumber = 1;

for (var i = 0; i < texts.length; i++)
{
    if (tegNumber % 3 === 0)
    {
        texts[i].style.visibility = "hidden";
    }
    tegNumber++;
    console.log(texts[i]);
}