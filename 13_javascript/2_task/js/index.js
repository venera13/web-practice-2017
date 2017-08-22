for (var i = 1; i < 4; i++)
{
    var titleNumber = "h" + i;
    var elements = document.getElementsByTagName(titleNumber);

    for (var j = 0; j < elements.length; j++)
    {
        console.log(elements[j]);
    }
}
