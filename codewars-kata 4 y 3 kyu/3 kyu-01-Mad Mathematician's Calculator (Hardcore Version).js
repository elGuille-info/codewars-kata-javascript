/*
  # 3 kyu Mad Mathematician's Calculator (Hardcore Version)
  https://www.codewars.com/kata/5a42497e55519ef5c5000015/solutions/javascript

Mad Mathematician's Calculator (Hardcore Version)

Story
This tragedy began because of one weird rich math-psycho, named Kuy. He lives alone in an apartment near a supermarket. Everyday, he has to buy his living stuff from that place. But one problem is that he could not carry all of them by himself. Once, Kuy decided to have a talk with an operator from the call center. Sadly, the supermarket denied his request to borrow their basket, despite of his strong entreat. Eventually, the operator cut Kuy's call swiftly with a reason that she had to deal with a programmer, leaving him with a word 'bye' and beep sound. That made him crazy for a while.

Unfortunately, you are in that while mentioned above. You are a programmer hired by Kuy to create a unique calculator software for him. A contract was made in exchange with huge amount of money. It has only one condition, "Do not violate limitations in the list."

Kuy's words after you have already signed the contract:

"I hate the operators, baskets, and programmers. So, I will troll you to satisfy myself HAHAHAHH. If you really are a true programmer, you should be able to do it by yourself without any excuses or shortcuts. Since I have got not much time, don't make me wait again and again."

Task
You have to write a calc(a,b,operator) function to receive 2 numbers and 1 operator respectively, assuming a, b, and operator. calc function will calculate a result from a and b as indicated by operator and return as a number.

Coding Limitation:
The data listed below are not allowed in your code:

Operators
Mathematical operators: +, -, *, /, %
Bitwise operators: <<, >>, ^, ~, !, |, &
Other operators: <, >, .
Basket Brackets: [, ], {, }
Numbers: 0-9, NaN
Quotations: ", ', `` `
Loop commands: for, while
Additional libraries/constructors: Array, Math, Number, String
Trolling conditions: global,return, this
Note: arrow function is allowed
The modules/functions below are also disabled:

Bypassing functions: require(), eval(), function constructor
Time functions: setTimeout(), setInterval()
Modules: fs, vm
Input:
a, b as integer from 0 to 5000
operator as string of basic mathematical operator as follow:
"+" addition
"-" substraction
"*" multiplication
"/" division
"%" modulus
Output:
return a number with maximum 2 decimal places (rounded down), or NaN if a/0 or a%0
Example:
calc(1, 2, "+") === 3 //should return true
calc(0, 0, "-") === 0 //should return true
calc(6, 7, "*") === 42 //should return true
calc(5, 4, "%") === 1 //should return true
isNaN(calc(9, 0, "/")) === true //should return true

|||| |---|---:| |Previous: Mad Mathematician's Calculator (Basic Version)||


PUZZLES, RESTRICTED
*/

// https://www.codewars.com/kata/reviews/5a426d7d9cd6384d370014f3/groups/5a63c25c700d3d18f20018a6
const date = _ => new Date();
const nan = _ => parseInt(date());

with (typeof date()) n_six = _ => length;
with (typeof date) n_eight = _ => length;
with (typeof date()) s_ = _ => charAt(n_eight());
with (typeof date) s_o = _ => charAt(n_six());

const s_string = _ => typeof s_();
with (s_()) n_minusOne = _ => search(s_o());
with (s_o()) n_zero = _ => indexOf(s_o());
with (s_o()) n_one = _ => length;
with (s_()) a_zero = _ => split(s_());
with (s_o()) stringify = _ => repeat(_);

with (a_zero()) array = _ => constructor;
with (array()) arrayPrototype = _ => prototype;
with (array()) f_from = _ => from;
with (f_from()) arrayify = _ => call(null, typeof _ == s_string() ? _ : stringify(_));
with (arrayPrototype()) f_push = _ => push;
with (f_push()) a_add = (_, $) => apply(_, $);
with (f_push()) len = _ => apply(_, a_zero());
with (arrayPrototype()) f_slice = _ => slice;
with (f_slice()) a_slice = (_, $) => call(_, $);
with (arrayPrototype()) f_map = _ => map;
with (f_map()) map = (_, $) => call(_, $);
with (arrayPrototype()) f_reduce = _ => reduce;
with (f_reduce()) reduce = (_, $) => call(_, $);

with (s_()) string = _ => constructor;
with (string()) f_ascii = _ => fromCharCode;
with (f_ascii()) ascii = _ => call(null, _);
with (string()) stringPrototype = _ => prototype;
with (stringPrototype()) f_repeat = _ => repeat;
with (f_repeat()) repeat = (_, $) => call(_, $);
with (stringPrototype()) f_starts = _ => startsWith;
with (f_starts()) starts = (_, $) => call(_, $);
with (stringPrototype()) f_concat = _ => concat;
with (f_concat()) s_concat = (_, $, _$) => call(call(_, $), _$);
with (stringPrototype()) f_pad = _ => padStart;
with (f_pad()) pad = (_, $, _$) => call(_, $, _$);

with (n_one()) number = _ => constructor;
with (number()) numberPrototype = _ => prototype;
with (numberPrototype()) f_parseI = _ => parseInt;
with (f_parseI()) int = _ => call(null, _);
with (numberPrototype()) f_parseF = _ => parseFloat;
with (f_parseF()) float = _ => call(null, _);

const add = (a, b) => a_add(arrayify(a), arrayify(b));

const n_two = _ => add(n_one(), n_one());
const n_thirtysix = _ => add(add(add(add(add(n_six(), n_six()), n_six()), n_six()), n_six()), n_six());
const n_thirtyseven = _ => add(n_thirtysix(), n_one()), percent = _ => ascii(n_thirtyseven());
const n_fartytwo = _ => add(n_thirtysix(), n_six()), asterisk = _ => ascii(n_fartytwo());
const n_fartythree = _ => add(n_fartytwo(), n_one()), plus = _ => ascii(n_fartythree());
const n_fartyfive = _ => add(n_fartythree(), n_two()), minus = _ => ascii(n_fartyfive());
const n_fartysix = _ => add(n_fartyfive(), n_one()), dot = _ => ascii(n_fartysix());
const n_fartyseven = _ => add(n_fartysix(), n_one()), slash = _ => ascii(n_fartyseven());

with (minus()) inv = _ => int(concat(_));

const a_sub = (a, b) => len(a_slice(arrayify(a), b));
const sub = (a, b) => a ? b ? a_sub(a, b) ? a_sub(a, b) : inv(a_sub(b, a)) : a : b ? inv(b) : n_zero();

const mul = (a, b) => a ? b ? a == n_one() ? b : b == n_one() ? a : len(arrayify(repeat(repeat(s_o(), a), b))) : n_zero() : n_zero();

const mod = (a, b, c) => b ? a == b ? n_zero() : b == n_one() ? n_zero() :
    starts(a, minus()) ? c : mod(sub(a, b), b, a) : nan();

const fmt = (n, d) => float(s_concat(n, dot(), d));
const div_iii = (a, b, c) => a ? div_iii(sub(a, b), b, add(c, n_one())) : c ? c : n_zero();
const div_ii = (a, b, m, n, d, r) => (
    m = mod(a, b),
    a = sub(a, m),
    n = div_iii(a, b),
    m = int(s_concat(m, n_zero(), n_zero())),
    r = mod(m, b),
    m = sub(m, r),
    d = pad(div_iii(m, b), n_two(), n_zero()),
    fmt(n, d)
);
const div = (a, b) => b ? a ? b == n_one() ? a : a == b ? n_one() : div_ii(a, b) : a : nan();


let calc = (a, b, o) => (
    o == plus() ? add(a, b) :
        o == minus() ? sub(a, b) :
            o == asterisk() ? mul(a, b) :
                o == slash() ? div(a, b) :
                    o == percent() ? mod(a, b) :
                        nan())