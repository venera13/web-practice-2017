var poem = ["У лукоморья дуб зелёный", "Златая цепь на дубе том", "И днём и ночью кот учёный", "Всё ходит по цепи кругом"];
var lineNumber = 0;

for (var i = 1; i < 4; i++)
{
    var titleNumber = "h" + i;
    var elements = document.getElementsByTagName(titleNumber);

    for (var j = 0; j < elements.length; j++)
    {
        if (lineNumber === poem.length)
        {
            lineNumber = 0;
        }
        elements[j].innerHTML = poem[lineNumber];
        lineNumber += 1;
        console.log(elements[j]);
    }
}