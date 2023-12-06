let base = prompt('Enter a base');
base = parseInt(base);

let exponent = prompt('Enter an exponent');
exponent = parseInt(exponent);

let sum = 1;
for (let index = 0; index < exponent; index++) {
    sum = sum * base;
}
alert(sum);