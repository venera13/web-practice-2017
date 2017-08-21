var PLUS_OPERATOR = "+";
var MINUS_OPERATOR = "-";
var MULTIPLICATION_OPERATOR = "*";
var DIVISION_OPERATOR = "/";
var SQRT_OPERATOR = "^";

function askDigit()
{
    var operand = +prompt("Введите числo");
    //Возвращает число, введенный пользователем
    return operand;
}

function askOperatior()
{
    var operator = prompt("Введите необходимую операцию");
    //Возвращает операцию, введенную пользователем
    return operator;
}

function calculate(operand1, operand2, operator)
{
    var result = null;
    if (operator === PLUS_OPERATOR)
    {
        result = operand1 + operand2;
    }
    else if(operator === MINUS_OPERATOR)
    {
        result = operand1 - operand2;
        if (result ===0 ) return "0";
    }
    else if(operator === MULTIPLICATION_OPERATOR)
    {
        result = operand1 * operand2;
    }
    else if(operator === DIVISION_OPERATOR)
    {
        if (operand2 !== 0)
        {
            result = operand1 / operand2;
        }
        else
        {
             alert("Деление на ноль невозможно");
        }
    }
    else if(operator === SQRT_OPERATOR)
    {
        result = operand1;
        for (i = 1; i < operand2; i++)
        {
            result *= operand1;
        }
    }
    else
    {
        alert("Unknown operator" + operator);
    }
    return result;
}


var operand1 = askDigit();
var operator = askOperatior();
var operand2 = askDigit();

var result = calculate(operand1, operand2, operator);
if (result)
{
    alert(operand1 + operator + operand2 + "=" + result);
}