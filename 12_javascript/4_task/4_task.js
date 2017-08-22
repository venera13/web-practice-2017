var calculator = {
    read: function ()
    {
        operand1 = +prompt("Введите число");
        operand2 = +prompt("Введите число");
    },
    sum: function ()
    {
        result = operand1 + operand2;
    },
    mul: function ()
    {
        result = operand1 * operand2;
    },
    div: function ()
    {
        if (operand2 === 0)
        {
            alert("Деление на 0 невозможно");
        }
        else
        {
            result = operand1 / operand2;
        }
    },
    sub: function ()
    {
        result = operand1 - operand2;
    },
    getResult: function()
    {
       return result;
    }
}
calculator.read();
calculator.sum();
alert(calculator.getResult());
