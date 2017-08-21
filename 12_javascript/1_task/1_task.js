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
            if (message.indexOf(keyWord) !== -1)
            {
                userMessage = userMessage.replace(keyWord, "****");
                break;
            }
        }
    }
    console.log(userMessage);
}
moderateMessage();