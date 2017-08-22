var elements = document.getElementsByTagName('p');
var tegNumber = 0;

for (var i = 0; i < elements.length; i++)
{
    if (tegNumber % 2 !== 0)
    {
        elements[i].style.background = "green";
    }
    tegNumber++;
    console.log(elements[i]);
}