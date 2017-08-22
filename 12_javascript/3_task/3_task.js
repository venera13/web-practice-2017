var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];

function compareAge(A, B)
{
    return A.age - B.age;
}

people.sort(compareAge);
for (var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}