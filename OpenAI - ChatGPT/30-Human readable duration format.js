/*
Can you please write a javascript function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


Here is a possible implementation of the function:

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { unit: "year", divisor: 365 * 24 * 60 * 60 },
    { unit: "day", divisor: 24 * 60 * 60 },
    { unit: "hour", divisor: 60 * 60 },
    { unit: "minute", divisor: 60 },
    { unit: "second", divisor: 1 }
  ];

  const parts = units.map(({ unit, divisor }) => {
    const value = Math.floor(seconds / divisor);
    seconds -= value * divisor;
    return value > 0 ? `${value} ${unit}${value > 1 ? "s" : ""}` : null;
  }).filter(Boolean);

  return parts.length > 1
    ? `${parts.slice(0, -1).join(", ")} and ${parts.slice(-1)}`
    : parts[0];
}

Here is how the function can be used:

console.log(formatDuration(62));  // 1 minute and 2 seconds
console.log(formatDuration(3662));  // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(1));  // 1 second
console.log(formatDuration(60));  // 1 minute
console.log(formatDuration(3600));  // 1 hour

Let me explain how the function works:

First, we check if the input is zero. If it is, we return "now".

Then, we define an array of units of time, in decreasing order of significance. Each unit has a name and a divisor that is used to convert seconds to the unit. For example, to convert seconds to minutes, we divide the number of seconds by the number of seconds in a minute (60).

Next, we map the units array to an array of strings, each representing the number of units of time in the input duration. If a unit of time has a non-zero value in the duration, we include it in the resulting array. Otherwise, we return null to filter it out.

Finally, we join the resulting array into a single string, using commas and the word "and" where appropriate. If the array has only one element, we return it directly. Otherwise, we use slice() to split the array into two parts: the last element, and the rest. We then join the rest with commas, and the last element with "and" to form the final string.

*/
function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const units = [
        { unit: "year", divisor: 365 * 24 * 60 * 60 },
        { unit: "day", divisor: 24 * 60 * 60 },
        { unit: "hour", divisor: 60 * 60 },
        { unit: "minute", divisor: 60 },
        { unit: "second", divisor: 1 }
    ];

    const parts = units.map(({ unit, divisor }) => {
        const value = Math.floor(seconds / divisor);
        seconds -= value * divisor;
        return value > 0 ? `${value} ${unit}${value > 1 ? "s" : ""}` : null;
    }).filter(Boolean);

    return parts.length > 1
        ? `${parts.slice(0, -1).join(", ")} and ${parts.slice(-1)}`
        : parts[0];
}

console.log(formatDuration(62));  // 1 minute and 2 seconds
console.log(formatDuration(3662));  // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(1));  // 1 second
console.log(formatDuration(60));  // 1 minute
console.log(formatDuration(3600));  // 1 hour
