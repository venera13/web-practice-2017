var userName, password;

userName = prompt("Введите логин", "логин");
if ( userName == "Админ" )
{
    password = prompt("Введите пароль", "пароль");
    if ( password == "Чёрный Властелин")
    {
        alert ("Добро пожаловать!")
    }
    else if ( password == null )
    {
        alert ("Вход отменен")
    }
    else
    {
        alert ("Пароль неверен")
    }
}
else if ( userName == null )
{
    alert ("Вход отменен");
}
else
{
    alert ("Я Вас не знаю")
}