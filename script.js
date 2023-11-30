/*Считаем степень числа

Запросить у пользователя 2 числа
первое число которое будет возводить в степень
второе - собственно степень в которую будем возводить
Не используя Math.pow и оператор "**" посчитать степень числа(используем циклы)
Реализацию сделать в 3 вариантах:
while
do ... while
for
P.S.Любое число в степени 0 равняется 1
0 в любой степени равняется 0 */

let base = prompt('Enter a base');
base = parseInt(base);

let exponent = prompt('Enter an exponent');
exponent = parseInt(exponent);

let sum = 1;
index = 0;

while (index !== exponent) {
    sum = sum * base;
    index++;
}

if(!base && !exponent) {
    alert (0)
} else {
    alert(sum)
}
