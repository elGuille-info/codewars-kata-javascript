/*
    # parseInt() reloaded (4 kyu)

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them

*/

/*
    Da error usando este código:
    //const words = string.replaceAll("-", " ").split(" ");
    // Y también con este otro:
    //const words = string.toString().replaceAll("-", " ").split(" ");
    // Esto también da error en la prueba y aquí funciona.
    const words = string.split(" ").split("-");

    En las pruebas dice: TypeError: string.replaceAll is not a function
    const words = string.replaceAll("-", " ").split(" ");
    Tampoco va haciendo esto:
    const words = string.toString().replaceAll("-", " ").split(" ");

    const words = string.split(" ").split("-");
    TypeError: string.split(...).split is not a function

    Con este truco de https://stackoverflow.com/a/63958411/14338047
    String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }
    string = string.replaceAllTxt("-", " ");

*/

/*
    Las soluciones
*/

//1- jakber, Fuzzy, nnnkit, testtest123, jwong483, HubertC, chubzthecoder, DanillGodovan, MaysaRouissi, namanmodi (+ 140)
// https://www.codewars.com/kata/reviews/525c7c5ab6aecef16e0001a8/groups/525db895a1b088366a001525
var words = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16,
    "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
    "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
};
var mult = { "hundred": 100, "thousand": 1000, "million": 1000000 };
function parseInt_1(str) {
    return str.split(/ |-/).reduce(function (value, word) {
        if (words[word]) value += words[word];
        if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
        return value;
    }, 0);
}

// Este código es largoooo....
//2- YOSYA
// https://www.codewars.com/kata/reviews/525c7c5ab6aecef16e0001a8/groups/5c70eca282b0650001b26495
function parseInt_2(s) {
    s = s.replace(/ and/gi, '');
    var ans = '';
    if (s == 'one million') return 1000000;
    if (s == 'zero') return 0;
    var c = false;
    if (s.indexOf('thousand') != -1)
        c = true;
    var arr = s.split(' ');
    if (c) {
        var t = [];
        var i = 0;
        while (arr[i] != 'thousand')
            t.push(arr[i++]);
        var d = false;
        if (t.indexOf('hundred') != -1)
            d = true;
        if (d) {
            if (t[0] == 'one') ans += 1;
            if (t[0] == 'two') ans += 2;
            if (t[0] == 'three') ans += 3;
            if (t[0] == 'four') ans += 4;
            if (t[0] == 'five') ans += 5;
            if (t[0] == 'six') ans += 6;
            if (t[0] == 'seven') ans += 7;
            if (t[0] == 'eight') ans += 8;
            if (t[0] == 'nine') ans += 9;

            if (t.length == 2)
                ans += '00';
            else {
                var k = t[2].split('-')
                if (k.length == 1) {
                    if (k[0] == 'one') ans += '01';
                    if (k[0] == 'two') ans += '02';
                    if (k[0] == 'three') ans += '03';
                    if (k[0] == 'four') ans += '04';
                    if (k[0] == 'five') ans += '05';
                    if (k[0] == 'six') ans += '06';
                    if (k[0] == 'seven') ans += '07';
                    if (k[0] == 'eight') ans += '08';
                    if (k[0] == 'nine') ans += '09';
                    if (k[0] == 'ten') ans += '10';
                    if (k[0] == 'eleven') ans += '11';
                    if (k[0] == 'twelve') ans += '12';
                    if (k[0] == 'thirteen') ans += '13';
                    if (k[0] == 'fourteen') ans += '14';
                    if (k[0] == 'fifteen') ans += '15';
                    if (k[0] == 'sixteen') ans += '16';
                    if (k[0] == 'seventeen') ans += '17';
                    if (k[0] == 'eighteen') ans += '18';
                    if (k[0] == 'nineteen') ans += '19';
                    if (k[0] == 'twenty') ans += '20';
                    if (k[0] == 'thirty') ans += '30';
                    if (k[0] == 'forty') ans += '40';
                    if (k[0] == 'fifty') ans += '50';
                    if (k[0] == 'sixty') ans += '60';
                    if (k[0] == 'seventy') ans += '70';
                    if (k[0] == 'eighty') ans += '80';
                    if (k[0] == 'ninety') ans += '90';
                }
                else {
                    if (k[0] == 'twenty') ans += '2';
                    if (k[0] == 'thirty') ans += '3';
                    if (k[0] == 'forty') ans += '4';
                    if (k[0] == 'fifty') ans += '5';
                    if (k[0] == 'sixty') ans += '6';
                    if (k[0] == 'seventy') ans += '7';
                    if (k[0] == 'eighty') ans += '8';
                    if (k[0] == 'ninety') ans += '9';
                    if (k[1] == 'one') ans += '1';
                    if (k[1] == 'two') ans += '2';
                    if (k[1] == 'three') ans += '3';
                    if (k[1] == 'four') ans += '4';
                    if (k[1] == 'five') ans += '5';
                    if (k[1] == 'six') ans += '6';
                    if (k[1] == 'seven') ans += '7';
                    if (k[1] == 'eight') ans += '8';
                    if (k[1] == 'nine') ans += '9';
                }
            }
        }
        else {
            var k = t[0].split('-')
            if (k.length == 1) {
                if (k[0] == 'one') ans += '1';
                if (k[0] == 'two') ans += '2';
                if (k[0] == 'three') ans += '3';
                if (k[0] == 'four') ans += '4';
                if (k[0] == 'five') ans += '5';
                if (k[0] == 'six') ans += '6';
                if (k[0] == 'seven') ans += '7';
                if (k[0] == 'eight') ans += '8';
                if (k[0] == 'nine') ans += '9';
                if (k[0] == 'ten') ans += '10';
                if (k[0] == 'eleven') ans += '11';
                if (k[0] == 'twelve') ans += '12';
                if (k[0] == 'thirteen') ans += '13';
                if (k[0] == 'fourteen') ans += '14';
                if (k[0] == 'fifteen') ans += '15';
                if (k[0] == 'sixteen') ans += '16';
                if (k[0] == 'seventeen') ans += '17';
                if (k[0] == 'eighteen') ans += '18';
                if (k[0] == 'nineteen') ans += '19';
                if (k[0] == 'twenty') ans += '20';
                if (k[0] == 'thirty') ans += '30';
                if (k[0] == 'forty') ans += '40';
                if (k[0] == 'fifty') ans += '50';
                if (k[0] == 'sixty') ans += '60';
                if (k[0] == 'seventy') ans += '70';
                if (k[0] == 'eighty') ans += '80';
                if (k[0] == 'ninety') ans += '90';
            }
            else {
                if (k[0] == 'twenty') ans += '2';
                if (k[0] == 'thirty') ans += '3';
                if (k[0] == 'forty') ans += '4';
                if (k[0] == 'fifty') ans += '5';
                if (k[0] == 'sixty') ans += '6';
                if (k[0] == 'seventy') ans += '7';
                if (k[0] == 'eighty') ans += '8';
                if (k[0] == 'ninety') ans += '9';
                if (k[1] == 'one') ans += '1';
                if (k[1] == 'two') ans += '2';
                if (k[1] == 'three') ans += '3';
                if (k[1] == 'four') ans += '4';
                if (k[1] == 'five') ans += '5';
                if (k[1] == 'six') ans += '6';
                if (k[1] == 'seven') ans += '7';
                if (k[1] == 'eight') ans += '8';
                if (k[1] == 'nine') ans += '9';
            }
        }
        i++;
        var t = [];
        while (i != arr.length)
            t.push(arr[i++]);
        if (t.length == 0)
            ans += '000';
        else {
            var d = false;
            if (t.indexOf('hundred') != -1)
                d = true;
            if (d) {
                if (t[0] == 'one') ans += 1;
                if (t[0] == 'two') ans += 2;
                if (t[0] == 'three') ans += 3;
                if (t[0] == 'four') ans += 4;
                if (t[0] == 'five') ans += 5;
                if (t[0] == 'six') ans += 6;
                if (t[0] == 'seven') ans += 7;
                if (t[0] == 'eight') ans += 8;
                if (t[0] == 'nine') ans += 9;

                if (t.length == 2)
                    ans += '00';
                else {
                    var k = t[2].split('-')
                    if (k.length == 1) {
                        if (k[0] == 'one') ans += '01';
                        if (k[0] == 'two') ans += '02';
                        if (k[0] == 'three') ans += '03';
                        if (k[0] == 'four') ans += '04';
                        if (k[0] == 'five') ans += '05';
                        if (k[0] == 'six') ans += '06';
                        if (k[0] == 'seven') ans += '07';
                        if (k[0] == 'eight') ans += '08';
                        if (k[0] == 'nine') ans += '09';
                        if (k[0] == 'ten') ans += '10';
                        if (k[0] == 'eleven') ans += '11';
                        if (k[0] == 'twelve') ans += '12';
                        if (k[0] == 'thirteen') ans += '13';
                        if (k[0] == 'fourteen') ans += '14';
                        if (k[0] == 'fifteen') ans += '15';
                        if (k[0] == 'sixteen') ans += '16';
                        if (k[0] == 'seventeen') ans += '17';
                        if (k[0] == 'eighteen') ans += '18';
                        if (k[0] == 'nineteen') ans += '19';
                        if (k[0] == 'twenty') ans += '20';
                        if (k[0] == 'thirty') ans += '30';
                        if (k[0] == 'forty') ans += '40';
                        if (k[0] == 'fifty') ans += '50';
                        if (k[0] == 'sixty') ans += '60';
                        if (k[0] == 'seventy') ans += '70';
                        if (k[0] == 'eighty') ans += '80';
                        if (k[0] == 'ninety') ans += '90';
                    }
                    else {
                        if (k[0] == 'twenty') ans += '2';
                        if (k[0] == 'thirty') ans += '3';
                        if (k[0] == 'forty') ans += '4';
                        if (k[0] == 'fifty') ans += '5';
                        if (k[0] == 'sixty') ans += '6';
                        if (k[0] == 'seventy') ans += '7';
                        if (k[0] == 'eighty') ans += '8';
                        if (k[0] == 'ninety') ans += '9';
                        if (k[1] == 'one') ans += '1';
                        if (k[1] == 'two') ans += '2';
                        if (k[1] == 'three') ans += '3';
                        if (k[1] == 'four') ans += '4';
                        if (k[1] == 'five') ans += '5';
                        if (k[1] == 'six') ans += '6';
                        if (k[1] == 'seven') ans += '7';
                        if (k[1] == 'eight') ans += '8';
                        if (k[1] == 'nine') ans += '9';
                    }
                }
            }
            else {
                var k = t[0].split('-')
                if (k.length == 1) {
                    if (k[0] == 'one') ans += '001';
                    if (k[0] == 'two') ans += '002';
                    if (k[0] == 'three') ans += '003';
                    if (k[0] == 'four') ans += '004';
                    if (k[0] == 'five') ans += '005';
                    if (k[0] == 'six') ans += '006';
                    if (k[0] == 'seven') ans += '007';
                    if (k[0] == 'eight') ans += '008';
                    if (k[0] == 'nine') ans += '009';
                    if (k[0] == 'ten') ans += '010';
                    if (k[0] == 'eleven') ans += '011';
                    if (k[0] == 'twelve') ans += '012';
                    if (k[0] == 'thirteen') ans += '013';
                    if (k[0] == 'fourteen') ans += '014';
                    if (k[0] == 'fifteen') ans += '015';
                    if (k[0] == 'sixteen') ans += '016';
                    if (k[0] == 'seventeen') ans += '017';
                    if (k[0] == 'eighteen') ans += '018';
                    if (k[0] == 'nineteen') ans += '019';
                    if (k[0] == 'twenty') ans += '020';
                    if (k[0] == 'thirty') ans += '030';
                    if (k[0] == 'forty') ans += '040';
                    if (k[0] == 'fifty') ans += '050';
                    if (k[0] == 'sixty') ans += '060';
                    if (k[0] == 'seventy') ans += '070';
                    if (k[0] == 'eighty') ans += '080';
                    if (k[0] == 'ninety') ans += '090';
                }
                else {
                    if (k[0] == 'twenty') ans += '02';
                    if (k[0] == 'thirty') ans += '03';
                    if (k[0] == 'forty') ans += '04';
                    if (k[0] == 'fifty') ans += '05';
                    if (k[0] == 'sixty') ans += '06';
                    if (k[0] == 'seventy') ans += '07';
                    if (k[0] == 'eighty') ans += '08';
                    if (k[0] == 'ninety') ans += '09';
                    if (k[1] == 'one') ans += '1';
                    if (k[1] == 'two') ans += '2';
                    if (k[1] == 'three') ans += '3';
                    if (k[1] == 'four') ans += '4';
                    if (k[1] == 'five') ans += '5';
                    if (k[1] == 'six') ans += '6';
                    if (k[1] == 'seven') ans += '7';
                    if (k[1] == 'eight') ans += '8';
                    if (k[1] == 'nine') ans += '9';
                }
            }
        }
    }
    else {
        var t = [];
        i = 0;
        while (i != arr.length)
            t.push(arr[i++]);

        var d = false;
        if (t.indexOf('hundred') != -1)
            d = true;
        if (d) {
            if (t[0] == 'one') ans += 1;
            if (t[0] == 'two') ans += 2;
            if (t[0] == 'three') ans += 3;
            if (t[0] == 'four') ans += 4;
            if (t[0] == 'five') ans += 5;
            if (t[0] == 'six') ans += 6;
            if (t[0] == 'seven') ans += 7;
            if (t[0] == 'eight') ans += 8;
            if (t[0] == 'nine') ans += 9;

            if (t.length == 2)
                ans += '00';
            else {
                var k = t[2].split('-')
                if (k.length == 1) {
                    if (k[0] == 'one') ans += '01';
                    if (k[0] == 'two') ans += '02';
                    if (k[0] == 'three') ans += '03';
                    if (k[0] == 'four') ans += '04';
                    if (k[0] == 'five') ans += '05';
                    if (k[0] == 'six') ans += '06';
                    if (k[0] == 'seven') ans += '07';
                    if (k[0] == 'eight') ans += '08';
                    if (k[0] == 'nine') ans += '09';
                    if (k[0] == 'ten') ans += '10';
                    if (k[0] == 'eleven') ans += '11';
                    if (k[0] == 'twelve') ans += '12';
                    if (k[0] == 'thirteen') ans += '13';
                    if (k[0] == 'fourteen') ans += '14';
                    if (k[0] == 'fifteen') ans += '15';
                    if (k[0] == 'sixteen') ans += '16';
                    if (k[0] == 'seventeen') ans += '17';
                    if (k[0] == 'eighteen') ans += '18';
                    if (k[0] == 'nineteen') ans += '19';
                    if (k[0] == 'twenty') ans += '20';
                    if (k[0] == 'thirty') ans += '30';
                    if (k[0] == 'forty') ans += '40';
                    if (k[0] == 'fifty') ans += '50';
                    if (k[0] == 'sixty') ans += '60';
                    if (k[0] == 'seventy') ans += '70';
                    if (k[0] == 'eighty') ans += '80';
                    if (k[0] == 'ninety') ans += '90';
                }
                else {
                    if (k[0] == 'twenty') ans += '2';
                    if (k[0] == 'thirty') ans += '3';
                    if (k[0] == 'forty') ans += '4';
                    if (k[0] == 'fifty') ans += '5';
                    if (k[0] == 'sixty') ans += '6';
                    if (k[0] == 'seventy') ans += '7';
                    if (k[0] == 'eighty') ans += '8';
                    if (k[0] == 'ninety') ans += '9';
                    if (k[1] == 'one') ans += '1';
                    if (k[1] == 'two') ans += '2';
                    if (k[1] == 'three') ans += '3';
                    if (k[1] == 'four') ans += '4';
                    if (k[1] == 'five') ans += '5';
                    if (k[1] == 'six') ans += '6';
                    if (k[1] == 'seven') ans += '7';
                    if (k[1] == 'eight') ans += '8';
                    if (k[1] == 'nine') ans += '9';
                }
            }
        }
        else {
            var k = t[0].split('-')
            if (k.length == 1) {
                if (k[0] == 'one') ans += '1';
                if (k[0] == 'two') ans += '2';
                if (k[0] == 'three') ans += '3';
                if (k[0] == 'four') ans += '4';
                if (k[0] == 'five') ans += '5';
                if (k[0] == 'six') ans += '6';
                if (k[0] == 'seven') ans += '7';
                if (k[0] == 'eight') ans += '8';
                if (k[0] == 'nine') ans += '9';
                if (k[0] == 'ten') ans += '10';
                if (k[0] == 'eleven') ans += '11';
                if (k[0] == 'twelve') ans += '12';
                if (k[0] == 'thirteen') ans += '13';
                if (k[0] == 'fourteen') ans += '14';
                if (k[0] == 'fifteen') ans += '15';
                if (k[0] == 'sixteen') ans += '16';
                if (k[0] == 'seventeen') ans += '17';
                if (k[0] == 'eighteen') ans += '18';
                if (k[0] == 'nineteen') ans += '19';
                if (k[0] == 'twenty') ans += '20';
                if (k[0] == 'thirty') ans += '30';
                if (k[0] == 'forty') ans += '40';
                if (k[0] == 'fifty') ans += '50';
                if (k[0] == 'sixty') ans += '60';
                if (k[0] == 'seventy') ans += '70';
                if (k[0] == 'eighty') ans += '80';
                if (k[0] == 'ninety') ans += '90';
            }
            else {
                if (k[0] == 'twenty') ans += '2';
                if (k[0] == 'thirty') ans += '3';
                if (k[0] == 'forty') ans += '4';
                if (k[0] == 'fifty') ans += '5';
                if (k[0] == 'sixty') ans += '6';
                if (k[0] == 'seventy') ans += '7';
                if (k[0] == 'eighty') ans += '8';
                if (k[0] == 'ninety') ans += '9';
                if (k[1] == 'one') ans += '1';
                if (k[1] == 'two') ans += '2';
                if (k[1] == 'three') ans += '3';
                if (k[1] == 'four') ans += '4';
                if (k[1] == 'five') ans += '5';
                if (k[1] == 'six') ans += '6';
                if (k[1] == 'seven') ans += '7';
                if (k[1] == 'eight') ans += '8';
                if (k[1] == 'nine') ans += '9';
            }
        }



    }
    return +ans;
}

//3- ooflorent, WernDar
// https://www.codewars.com/kata/reviews/525c7c5ab6aecef16e0001a8/groups/53f60260c0c45de84100c7e2
function parseInt_3(string) {
    var english = {
        zero: 0, ten: 10,
        one: 1, eleven: 11,
        two: 2, twelve: 12, twenty: 20,
        three: 3, thirteen: 13, thirty: 30,
        four: 4, fourteen: 14, forty: 40,
        five: 5, fifteen: 15, fifty: 50,
        six: 6, sixteen: 16, sixty: 60,
        seven: 7, seventeen: 17, seventy: 70,
        eight: 8, eighteen: 18, eighty: 80,
        nine: 9, nineteen: 19, ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000
    };

    var parts = string.split(/[- ]/).filter(function (word) {
        return word != 'and';
    }).map(function (word) {
        return english[word];
    });

    var total = 0;
    var prev = 0;

    for (var i = 0, n = parts.length - 1; i <= n; i++) {
        var curr = parts[i];
        if (prev == 0) {
            prev = curr;
        } else if (prev > curr) {
            prev += curr;
        } else {
            prev *= curr;
        }

        if (curr >= 1000 || i == n) {
            total += prev;
            prev = 0;
        }
    }

    return total;
}

// La presentada (ha pasado la prueba)
function parseInt(string) {
    // TODO: it's your task now

    // Crea un diccionario con los números escritos como texto y su valor numérico correspondiente
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
    };

    // Divide la cadena en palabras y recorre cada palabra (entre espacios)
    // Cambiamos el "dash" por un espacio y después dividimos en palabras separadas por espacios

    //const words = string.toString().replaceAll("-", " ").split(" ");
    // Para que funcione en el kata, usar esto:
    String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }
    string = string.replaceAllTxt("-", " ");
    const words = string.split(' ');

    let result = 0;
    let current = 0;
    let last = 0;
    for (const word of words) {
        // Si la palabra es "and", simplemente la ignoramos
        if (word === "and") continue;

        // Si la palabra está en el diccionario de números, actualizamos el valor actual
        if (word in numbers) {
            if (last == 0) {
                last = current;
                current = numbers[word];
                result += current;
            }
            else {
                current = numbers[word];
                result = last + current;
                last = result;
            }
        } else if (word === "hundred") {
            // Si la palabra es "hundred", multiplicamos el valor actual por 100
            current *= 100;
            // Para solucionar 'five hundred thousand three hundred', 500300
            //  También funciona con 'one hundred'
            // Pero falla con: two hundred forty-six = 246 y seven hundred eighty-three thousand nine hundred and nineteen = 783919
            last += current;
            result = last;
            // Para solucionar 'one hundred', pero falla con 'five hundred thousand three hundred', 500300
            //result = current;
        } else if (word === "thousand") {
            // Si la palabra es "thousand", multiplicamos el valor actual por 1000 y lo agregamos al resultado, y luego reseteamos el valor actual
            result *= 1000;
            current = result;
            last = 0;
        } else if (word === "million") {
            // Si la palabra es "million", multiplicamos el valor actual por 1000000 y lo agregamos al resultado, y luego reseteamos el valor actual
            //result += current * 1000000;
            result *= 1000000;
            current = result;
            last = 0;
        }
    }
    return result;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = parseInt;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
comparaResultado('one', 1);
comparaResultado('twenty', 20);
comparaResultado('two hundred forty-six', 246);
comparaResultado('seven hundred eighty-three thousand nine hundred and nineteen', 783919);
// Esta fallaba en el kata
comparaResultado('one hundred', 100);
// Esto fallaba en el kata
comparaResultado('five hundred thousand three hundred', 500300);
/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(parseInt('one'), 1);
Test.assertEquals(parseInt('twenty'), 20);
Test.assertEquals(parseInt('two hundred forty-six'), 246);
  });
});
*/
