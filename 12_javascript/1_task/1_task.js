var userMessage = prompt("Введите сообщение:");
var keyWords = ["зима", "Весна", "лето", "осень"];

function creatStars(word)
{
    var stars = "*";
    for (var k = 1; k < word.length; k++)
    {
        stars += "*";
    }
    return stars;
}

function moderateMessage()
{
    var message = userMessage.toLowerCase();
    for (var j = 0; j < keyWords.length; j++)
    {
        var keyWord = keyWords[j].toLowerCase();
        var stars = creatStars(keyWord);
        if (message.indexOf(keyWord) !== -1)
        {
            userMessage = userMessage.replace(keyWord, stars);
            break;
        }
    }
    console.log(userMessage);
}
moderateMessage();