for (var i = 1; i < 4; i++)
{
    var titleNumber = "h" + i;
    var titles = document.getElementsByTagName(titleNumber);

    for (var j = 0; j < titles.length; j++)
    {
        console.log(titles[j].textContent);
    }
}
