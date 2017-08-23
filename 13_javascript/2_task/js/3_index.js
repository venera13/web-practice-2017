var texts = document.getElementsByTagName('p');
var tegNumber = 0;

for (var i = 0; i < texts.length; i++)
{
    if (tegNumber % 2 !== 0)
    {
        texts[i].style.background = "green";
    }
    tegNumber++;
    console.log(texts[i].textContent);
}