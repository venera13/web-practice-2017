var fedor = {
    age: 6,
    pet: true,
    name: "Дядя Фёдор",
    dog: {
        name: "Шарик",
        home: "Простоквашино",
        hobby: true,
        age: 6
    }
};
cat = {
    name: "Матроскин",
    home: "Простоквашино",
    pet: true,
    age: 6
};
fedor.cat = {};
console.log(fedor);
cat.name = "Пушок";
console.log(fedor);



