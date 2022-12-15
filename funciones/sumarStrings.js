/*
    # Sumar cadenas

    https://levelup.gitconnected.com/how-to-add-two-very-large-numbers-in-javascript-6305ed8c5fad

*/
var first = '893427328497983427893248932498034289324';
var second = '234859234879342897893427893274';

if (first.length >= second.length) {
    console.log(findSum(first, second));
} else {
    findSum(second, first);
}

function findSum(first, second) {

    var sum = '';
    var carry = 0;
    var diff = second.length - first.length;
    for (i = first.length - 1; i >= 0; i--) {
        var temp =
            (Number(first.charAt(i)) % 10) +
            (Number(second.charAt(i + diff)) % 10) +
            carry;
        if (temp >= 10) {
            sum = (temp % 10) + sum;
            carry = Math.floor(temp / 10);
        } else {
            sum = temp + sum;
            carry = 0;
        }
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}

function sumStr(num1, num2) {
    let first, second;

    if (num1.length >= num2.length) {
        first = num1
        second = num2
    } else {
        second = num1
        first = num2
    }
    var sum = '';
    var carry = 0;
    var diff = second.length - first.length;
    for (i = first.length - 1; i >= 0; i--) {
        var temp =
            (Number(first.charAt(i)) % 10) +
            (Number(second.charAt(i + diff)) % 10) +
            carry;
        if (temp >= 10) {
            sum = (temp % 10) + sum;
            carry = Math.floor(temp / 10);
        } else {
            sum = temp + sum;
            carry = 0;
        }
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}
