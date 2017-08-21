function primeNumber(minNumber, maxNumber)
{
    var FROM_NUMBER = minNumber;
    var TO_NUMBER = maxNumber;
    prime:
    for (var i = FROM_NUMBER; i <= TO_NUMBER; i++)
    {
        for (j = 2; j < i; j++)
        {
            if (i%j === 0) continue prime;
        }
        console.log( i )
    }
}

primeNumber(20,30);