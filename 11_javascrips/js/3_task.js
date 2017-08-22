var FROM_NUMBER = 2;
var TO_NUMBER = 10;
var STEP_NUMBER = 2;

i = FROM_NUMBER;
while (i <= TO_NUMBER)
{
    console.log(i);
    i += STEP_NUMBER;
}

for (var j = FROM_NUMBER; j <= TO_NUMBER; j += STEP_NUMBER)
{
    console.log(j);
}