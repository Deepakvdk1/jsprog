function recurs(str, index = 0, temp = "") {
    if (index >= str.length) return;

    temp += str[index];
    console.log(temp);

    recurs(str, index + 1, temp);
}

let input = "selenium";
recurs(input);