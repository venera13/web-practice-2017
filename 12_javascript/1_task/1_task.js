var userMessage = prompt("Введите сообщение:");
var keyWords = ["зима", "Весна", "лето", "осень"];
function moderateMessage()
{
    for (var i = 0; i < userMessage.length; i++)
    {
        var message = userMessage.toLowerCase();
        for (var j = 0; j < keyWords.length; j++)
        {
            var keyWord = keyWords[j].toLowerCase();
            var stars = "*";
            for (var k = 1; k < keyWord.length; k++)
            {
                stars += "*";
            }
            if (message.indexOf(keyWord) !== -1)
            {
                userMessage = userMessage.replace(keyWord, stars);
                break;
            }
        }
    }
    console.log(userMessage);
}
moderateMessage();