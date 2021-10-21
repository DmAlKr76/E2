let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]

]);

for (let list of fruits.entries()) {
    console.log(`Ключ: ${list[0]}, значение: ${list[1]}`)
}