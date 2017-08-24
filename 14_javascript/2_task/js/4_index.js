var texts = $('p');
var tegNumber = 0;

$.each(texts, function (index, element) {
    if (tegNumber % 2 !== 0)
    {
        element.style.visibility = "hidden";
    }
    tegNumber++;
    console.log(element.textContent);
});