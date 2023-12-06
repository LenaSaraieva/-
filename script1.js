let base = prompt('Enter a base');
base = parseInt(base);

let exponent = prompt('Enter an exponent');
exponent = parseInt(exponent);

let sum = 1;
let index = 0;

do {
    sum = sum * base;
    index++;
} while (index !== exponent);

!base && !exponent ? alert (0) : alert(sum);