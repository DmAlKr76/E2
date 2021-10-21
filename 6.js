let arr = [1, 1, 1, 2];

let result = "Элементы в массиве одинаковые"
for (let i = 0; i < arr.length; i = i + 1){
    for (j = i + 1; j< arr.length; j = j +1){
        if (arr[i] !== arr[j]){
            result = "Элементы в массиве неодинаковые"
        }
    }
}
console.log(result)