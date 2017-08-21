var calculator = {
    read: function ()
    {
        operand1 = +prompt("Введите число");
        operand2 = +prompt("Введите число");
        var result = null;
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
        result = operand1 / operand2;
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
