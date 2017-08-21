var KEY_PHRASE = 'Чёрт побери';
var userText = prompt("Введите сообщение: ", "");
userText.toLowerCase();
if (userText.indexOf(KEY_PHRASE.toLowerCase()) !== -1)
{
    alert("Подскользнулся, упал. Очнулся - гипс");
}
else
{
    alert("Я вас не понимаю")
}