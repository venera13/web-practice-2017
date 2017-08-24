for (var i = 1; i < 4; i++)
{
    var titleNumber = "h" + i;
    var titles = $(titleNumber);

    $.each(titles,function(index,element){
        console.log(element.textContent);
    });
}

//console.log($(':header').text());
