var elements = document.getElementsByTagName('p');
var tegNumber = 1;

for (var i = 0; i < elements.length; i++)
{
    if (tegNumber % 3 === 0)
    {
        elements[i].style.visibility = "hidden";
    }
    tegNumber++;
    console.log(elements[i]);
}