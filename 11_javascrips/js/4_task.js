var FROM_NUMBER = 20;
var TO_NUMBER = 30;

function primeNumber(minNumber, maxNumber)
{
    prime:
    for (var i = minNumber; i <= maxNumber; i++)
    {
        for (var j = 2; j < i; j++)
        {
            if (i % j === 0) continue prime;
        }
        console.log(i)
    }
}

primeNumber(FROM_NUMBER, TO_NUMBER);