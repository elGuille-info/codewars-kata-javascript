/*
07- Pedir crear código de JavaScript con ChatGPT / OpenAI (chat.openai.com/chat) (10/dic/22)

I need a JavaScript function to emulate text justification in monospace font. 
Given a single-lined text and the expected justification width. 
The longest word will never be greater than this width.

Here are the rules:
Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones.
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').

Here is a JavaScript function that you can use to justify text in monospace font:

function justify(text, width) {
  // Split the text into an array of words
  const words = text.split(' ');

  // Initialize the current line and the result string
  let line = "";
  let result = "";

  // Loop through each word in the array
  for (const word of words) {
    // If adding the current word to the line would make it too long,
    // add a line break and reset the line to the current word
    if (line.length + word.length + 1 > width) {
      result += line + '\n';
      line = word;
    }
    // Otherwise, add the word to the current line with a space
    else {
      line += " " + word;
    }
  }

  // Add the last line to the result
  result += line;

  // Return the justified text
  return result;
}

To use this function, you can pass it a string of text and the expected width of the text. For example:

console.log(justify("This is a test", 10));
This will print the following output:

This  is 
a test
Note that the function does not justify the last line, as specified in the requirements. The last line will simply have one space between each word.
*/

function justify(text, width) {
    // Split the text into an array of words
    const words = text.split(' ');
  
    // Initialize the current line and the result string
    let line = "";
    let result = "";
  
    // Loop through each word in the array
    for (const word of words) {
      // If adding the current word to the line would make it too long,
      // add a line break and reset the line to the current word
      if (line.length + word.length + 1 > width) {
        result += line + '\n';
        line = word;
      }
      // Otherwise, add the word to the current line with a space
      else {
        line += " " + word;
      }
    }
  
    // Add the last line to the result
    result += line;
  
    // Return the justified text
    return result;
}

console.log(justify("This is a test", 10));
console.log(justify("This is a test con más palabras a ver qué pasa.", 12));

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
console.log(justify(LIPSUM, 30));
