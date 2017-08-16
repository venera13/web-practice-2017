function primeNumber(minNamber, maxNamber)
{
    prime:
    for (i = minNamber; i <= maxNamber; i++)
    {
        for (j = 2; j < i; j++)
        {
            if ( i % j == 0 ) continue prime;
        }
        console.log ( i )
    }
}

primeNumber(20,100);